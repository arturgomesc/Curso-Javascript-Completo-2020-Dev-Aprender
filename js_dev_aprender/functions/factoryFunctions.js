//camelCase umDoisTresQuatro
//Factory Functions (Funcoes de Fabrica)

function criarCelular(marcaCelular,tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligacao...");
        }
    }
}