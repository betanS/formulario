//######################################################### CONSTRUCTORES // DECLARACION VAR ##########################

const patterns = {
  // Nombre: primera letra mayúscula, resto letras (aceptando acentos)
  nombre: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/,
  // Apellido: primera letra mayúscula, puede contener hasta 2 espacios (máx. 3 apellidos)
  // Cada apellido debe iniciar con mayúscula
  apellido: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,2}$/,
  dni: /^\d{8}[A-Z]$/i,// DNI: 8 números + letra final. (Sin NIE)
  fecha: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/,// Fecha: formato DD/MM/AAAA con validación básica de rangos
  codigo: /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/,// Código postal español: 5 dígitos, 01xxx – 52xxx
  correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,// Email válido estándar
  telefono: /^[6789]\d{8}$/, // Teléfono español: 9 dígitos empezando 678 o 9
  telefonofijo: /^[89]\d{8}$/, // Teléfono fijo español: 9 dígitos empezando 8 o 9
  iban: /^ES\d{22}$/i,// IBAN español: ES + 22 dígitos
  tarjeta: /^\d{16,19}$/, // Tarjeta: mínimo 16 dígitos
  contrasena: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,}$/,
  ccontrasena: /.*/, 
};

//Declaramos el objeto de la lista para guardar en sessionStorage
let listaDatos = {
    nombre: "",
    apellido: "",
    dni: "",
    fecha: "",
    codigo: "",
    correo: "",
    telefono: "",
    telefonofijo: "",
    iban: "",
    tarjeta: "",
    contrasena: ""
};

//// Declaramos los bloques que extraemos del html. 
const inputs = document.querySelectorAll('input');
const guardar = document.querySelector('#submitBtn');
const recuperar = document.querySelector('#recuperar');


//######################################################### BOTONES // OnClick ##########################
//// Haciendo uso del método forEach, añadimos el evento keyup a cada uno de los inputs de la colección '(input)'.
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    if (e.target.attributes.name.value === 'ccontrasena') { // Validar confirmación de contraseña
        const confirmContrasena = document.querySelector('input[name="contrasena"]');
        if(confirmContrasena.value == e.target.value) { // Comparar con el valor del campo de contraseña
            e.target.className = 'valido';
        } else {
            e.target.className = 'invalido';
        }
        return; // Salir de la función para evitar validación adicional
    }
    /*if (e.target.attributes.name.value === 'telefono' || e.target.attributes.name.value === 'telefonofijo') {
        e.target.preventDefault(); 
    }*/
    if (e.target.attributes.name.value === 'contrasena') { // Si se está validando la contraseña, también validar la confirmación
        const confirmInput = document.querySelector('input[name="ccontrasena"]');
        if(confirmInput.value === e.target.value) {
            confirmInput.className = 'valido';
        } else {
            confirmInput.className = 'invalido';
        }
        //en este caso no hacemos return porque queremos validar la contraseña normalmente también
    }


      validate(e.target, patterns[e.target.attributes.name.value]); 
  });
});

//Asignamos el onclick del boton de GUARDAR
guardar.addEventListener('click', (e) => {
    if(verificarValidos()){
        saveData(listaDatos);
        console.log("Guardando....")
    }else{
        alert("Error, datos erróneos o incompletos.");
    }
});

//Asignamos el onclick del boton de RECUPERAR
recuperar.addEventListener('click', (e) => {
    var datosRecuperados = retreiveData();
    console.log("datosRecuperados" + datosRecuperados);
    //Rellenar los campos del formulario con los datos recuperados
    inputs.forEach((input) => {
        console.log("Rellenando campo: " + input.name + " con valor: " + datosRecuperados[input.name]);
        input.value = datosRecuperados[input.name];
        validate(input, patterns[input.name]);
    });
});

//######################################################### Funciones ##########################

//// Declaración de la función de validación 'validate' para validar el valor del campo del formulario (variable 'campo') utilizando la expresión regular (variable 'regex').  
function validate(campo, regex) {
    // El método 'test' comprueba que el valor del campo recibido (e.target) cumple la expresión regular recibida (patterns[e.target.attributes.name.value]) como parámetros  
    if(regex.test(campo.value)) {
      campo.className = 'valido';
    } else {
      campo.className = 'invalido';
    }
}

function verificarValidos(){
    var todosValidos = true;
    inputs.forEach((input)=> {
        if (input.className != "valido"){
            console.log("Error en el campo: " + input.name);
            todosValidos = false;
        }else{
            //Llenar el objeto listaDatos
            listaDatos[input.name] = input.value;
        }
    });
    console.log(listaDatos);
    return todosValidos;
}

//######################################################### Guardado // Carga DATOS ##########################

function saveData(objetoDatos){
    //Guardar datos como Key:DATA + Objeto(lista de datos)
    sessionStorage.setItem("DATA", JSON.stringify(objetoDatos));
    alert("Datos guardados correctamente.");
    //Siempre Sobreescribe si ya existe
}

function retreiveData(){
    var datos = sessionStorage.getItem("DATA");
    datos = JSON.parse(datos); //Convertir de nuevo a objeto
    return datos;
}





//APLICAR PREVENTDEFAULT