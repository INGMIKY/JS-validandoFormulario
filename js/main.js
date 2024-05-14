import esUnCuil from "./validarCuil.js";
import esMayorDeEdad from "./validarEdad.js";


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

    if(campo.name == "fecha_nacimiento" && campo.value!= ""){
        esMayorDeEdad(campo);
    }
}
// console.log(campoDeFormulario);