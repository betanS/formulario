## Enunciado

Diseña un **formulario en HTML y CSS** para darse de alta en una tienda online que incluya los siguientes campos:

- Nombre (al menos uno que comience con mayúscula)  
- Apellidos (no más de dos separados por un espacio, cada uno comenzando con mayúscula)  
- Número de DNI/NIE español  
- Fecha de nacimiento (formato DD/MM/AAAA)  
- Código Postal español  
- E-mail válido  
- Teléfono fijo español  
- Teléfono móvil español  
- IBAN  
- Tarjeta de crédito  
- Contraseña (no visible, al menos 12 caracteres con letras, números y un carácter especial)  
- Repetir contraseña

**Requisitos de implementación:**

1. Las **expresiones regulares** serán atributos de un objeto con métodos para comprobar los campos.  
2. Si un campo no se completa correctamente, cambiará a **color rojo** y aparecerá un aviso junto al campo indicando el formato correcto.  
3. Solo si todos los campos son correctos, cambiarán a **color verde**, se almacenarán en un **objeto JSON** y posteriormente en **sessionStorage** al pulsar el botón "GUARDAR".  
4. Al recargar la página, un botón "RECUPERAR" permitirá recuperar la información desde sessionStorage y mostrar los datos en los campos correspondientes, validándolos de nuevo.  
5. Todo el acceso al DOM se hará únicamente mediante `querySelector` y se usarán **eventos de teclado y ratón** (no eventos HTML).  
6. Se debe optimizar el código, evitando redundancias y listados innecesarios.  

---

## Evaluación

| Criterio | Valoración |
|---------|------------|
| Sangrado y comentarios correctos. Nombres de variables en camelCase significativos y con comentarios explícitos | Pendiente |
| Todas las expresiones regulares funcionan correctamente | Pendiente |
| Se evita el comportamiento por defecto del formulario | Pendiente |
| La información se guarda correctamente en sessionStorage | Pendiente |
| La información se recupera correctamente de sessionStorage y se valida de nuevo | Pendiente |
| Uso de objetos para expresiones regulares y datos de campos | Pendiente |
| Se detectan errores al recuperar los datos | Pendiente |
| Uso de eventos de teclado y ratón (sin eventos HTML) | Pendiente |
| Optimización del código (evitar redundancias) | Pendiente |
| Acceso al DOM usando solo querySelector | Pendiente |
