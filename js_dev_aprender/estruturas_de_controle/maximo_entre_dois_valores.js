// Escreva uma função que usa 2 números e retorna o maior entre eles 

let valorMaior = max(4,7);
console.log(valorMaior);

function max(numero1,numero2) {
    if (numero1 > numero2)
        return numero1;
    if (numero2 > numero1) 
        return numero2;
    else console.log('os valores são iguais = ');

    return numero1 > numero2 ? numero1 : numero2; 
}