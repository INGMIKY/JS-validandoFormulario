import esUnCuil from "./validarCuil.js";
import esMayorDeEdad from "./validarEdad.js";
import { tiposError, mensajes } from "./customError.js"

const campoDeFormulario = document.querySelectorAll("[required]");



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
  
  tiposError.forEach(error=>{
    if(campo.validity[error]){
      mensaje = mensajes[campo.name][error]
      console.log(mensaje);
    }
  })

  // utilizamos parentNode para utilizar todos los span sino el más proximo al campo correspondiente al error
  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();
  if(!validarInputCheck){
      mensajeError.textContent = mensaje
  }else{
    mensajeError.textContent = ""
  }

}
// console.log(campoDeFormulario);