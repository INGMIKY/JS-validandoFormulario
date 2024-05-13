import esUnCuil from "./validarCuil.js";

const campoDeFormulario = document.querySelectorAll("[required]");


// El evento blur se refiere al elemento que no tiene focus, es decir, cuando
// no estamos interactuando con el.
campoDeFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=> verificarCampo(campo))
});

function verificarCampo(campo){
    if(campo.name=="cuil" && campo.value.length >=11){
        esUnCuil(campo);
    }
}
// console.log(campoDeFormulario);