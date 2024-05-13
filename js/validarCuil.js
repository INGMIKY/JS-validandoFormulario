export default function esUnCuil(campo){
    const  cuil = campo.value.replace(/[-\/]/g,"");
    tieneNumeroRepetidos(cuil);
    console.log(cuil);
    console.log(tieneNumeroRepetidos(cuil));
}

function tieneNumeroRepetidos(cuil){
    const numeroRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
    ];

    return numeroRepetidos.includes(cuil);
}