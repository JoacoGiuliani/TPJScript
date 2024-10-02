// console.log("9.LocalStorage");

//         console.log("Ejercicio 1: ");

//                 const formularioCorreo = document.getElementById('formularioCorreo');
//                 const correoInput = document.getElementById('correoInput');
//                 const correoGuardadoDiv = document.getElementById('correoGuardado');

//                 function mostrarCorreo() {
//                 const correoGuardado = localStorage.getItem('correo');
//                 if (correoGuardado) {
//                         correoGuardadoDiv.innerHTML = `
//                         <p>Correo guardado: <strong>${correoGuardado}</strong></p>
//                         <button id="eliminarCorreo">Eliminar Correo Guardado</button>
//                         `;
//                         correoGuardadoDiv.style.display = 'block'; 
//                         document.getElementById('eliminarCorreo').addEventListener('click', eliminarCorreo);
//                 } else {
//                         correoGuardadoDiv.style.display = 'none'; 
//                 }
//                 }

//                 function eliminarCorreo() {
//                         localStorage.removeItem('correo');
//                         mostrarCorreo(); 
//                 }
                
//                 formularioCorreo.addEventListener('submit', function(event) {
//                         event.preventDefault(); 
//                         const correo = correoInput.value;
//                         localStorage.setItem('correo', correo); 
//                         mostrarCorreo(); 
//                         formularioCorreo.reset(); 
//                 });
                
//                 window.addEventListener('load', mostrarCorreo);