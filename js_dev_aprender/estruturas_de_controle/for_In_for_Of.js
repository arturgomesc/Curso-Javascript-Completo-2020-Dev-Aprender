//for-in

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};
//key-value 

for(let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}

//for-of

for(let cor of cores){
    console.log(cor);
}


const celulares = ['iPhone', 'Samsung', 'Xiaomi', 'Motorola']

for(modelos in celulares) {
    console.log(celulares[modelos]);
}

for(modelos of celulares) {
    console.log(modelos);
}