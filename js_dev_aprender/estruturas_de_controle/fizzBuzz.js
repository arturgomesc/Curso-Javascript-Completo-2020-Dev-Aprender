// divisível por 3 => Fizz
// divisível por 5 => Buzz 
// divisível por 3 e 5 => FizzBuzz
// não divisível por 3 nem 5 => valor de entrada
// não é um número => retornar "não é um número"

const resultado = fizzBuzz(5);
console.log(resultado);

function fizzBuzz(valor) {
    if (typeof valor === 'string')
        return 'Invalid'
    if (valor % 3  === 0 && valor % 5 === 0) 
        return 'FizzBuzz'
    if (valor % 3 === 0)
        return 'Fizz'
    if (valor % 5 === 0)
        return 'Buzz'
    else return ' '
}