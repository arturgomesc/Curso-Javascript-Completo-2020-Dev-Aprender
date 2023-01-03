// Criar um método para ler as proprieddes de um objeto
// Exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Russo',
    personagem : 'Thor'
}
exibirPropriedades(filme)

function exibirPropriedades(obj) {
    for (prop in obj) {
        if(typeof prop === 'string')
            console.log(prop, obj[prop]);
    }
}