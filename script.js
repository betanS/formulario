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
  iban: /^ES\d{22}$/i,// IBAN español: ES + 22 dígitos
  tarjeta: /^\d{16,19}$/, // Tarjeta: mínimo 16 dígitos
  contrasena: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{12,}$/,
  ccontrasena: /.*/, 
};



//// Declaramos los bloques que extraemos del html. 
const inputs = document.querySelectorAll('input');
const guardar = document.querySelector('#submitBtn');



//// Haciendo uso del método forEach, añadimos el evento keyup a cada uno de los inputs de la colección '(input)'.
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    /*if(e.target.name == "ccontrasena" || e.target.name == "contrasena"){
        if()            VALIDAR QUE SEAN IGUALES 
    }*/
      validate(e.target, patterns[e.target.attributes.name.value]); 
  });
});


//// Declaración de la función de validación 'validate' para validar el valor del campo del formulario (variable 'campo') utilizando la expresión regular (variable 'regex').  
function validate(campo, regex) {
    // El método 'test' comprueba que el valor del campo recibido (e.target) cumple la expresión regular recibida (patterns[e.target.attributes.name.value]) como parámetros  
    if(regex.test(campo.value)) {
      campo.className = 'valido';
    } else {
      campo.className = 'invalido';
    }
}

//Asignamos el onclick del boton de GUARDAR
guardar.addEventListener('click', (e) => {
    if(verificarValidos()){
        //saveData
        alert("Guardado, datos guardados correctamente.")
    }else{
        alert("Error, datos erróneos o incompletos.");
    }
});

function verificarValidos(){
    inputs.forEach((input)=> {
        if (input.className != 'valido'){
            return false;
        }
    });
    console.log(resultado);
    return resultado;
}

function saveData(){
    //Guardar datos como Key:DNI + Objeto(lista de datos)
    //if (DNI ya existe) return Alert:"El dni ya existe datos no guardados"
}

function retreiveData(DNI){
    //getItem DNI from sessionStorage 
    //return objeto(lista de datos)
}


