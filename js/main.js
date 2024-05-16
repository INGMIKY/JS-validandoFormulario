import esUnCuil from "./validarCuil.js";
import esMayorDeEdad from "./validarEdad.js";
import { tiposError, mensajes } from "./customError.js"

const campoDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e) => {
  // no recargar la pagina al enviar el formulario
  e.preventDefault();
  const listaRespuesta = {
    nombre: e.target.elements["nombre"].value,
    email: e.target.elements["email"].value,
    identificacion: e.target.elements["identificacion"].value,
    cuil: e.target.elements["cuil"].value,
    fecha_nacimiento: e.target.elements["fecha_nacimiento"].value,
  }

  // convertir a un formato JSON (para poder ser manejable) para ser guardado a nuestro almacenamiento local de nuestro navegador
  // El método setItem() permite almacenar objetos en el localStorage y a través del método JSON.stringify() 
  // convertimos el objeto a un formato compatible para su almacenamiento.
  localStorage.setItem("registro", JSON.stringify(listaRespuesta))

  window.location.href = "./abrir-cuenta-form-2.html";
})


// El evento blur se refiere al elemento que no tiene focus, es decir, cuando
// no estamos interactuando con el.
campoDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";

  // Codigo despues de poner errores costumizados
  campo.setCustomValidity("");

  if (campo.name == "cuil" && campo.value.length >= 11) {
    esUnCuil(campo);
  }

  if (campo.name == "fecha_nacimiento" && campo.value != "") {
    esMayorDeEdad(campo);
  }

  // para ver los estatus del campo y algunos errores
  // console.log(campo.validity);

  tiposError.forEach(error => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error]
      console.log(mensaje);
    }
  })

  // utilizamos parentNode para utilizar todos los span sino el más proximo al campo correspondiente al error
  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();
  if (!validarInputCheck) {
    mensajeError.textContent = mensaje
  } else {
    mensajeError.textContent = ""
  }

}
// console.log(campoDeFormulario);