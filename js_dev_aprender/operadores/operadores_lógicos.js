//operadores lógicos
// e (&&) --> retorna TRUE se os dois operandos forem true

console.log(true && true);
console.log(false && false);
console.log(false && true);

// ou (||) --> retorna TRUE se um dos operandos forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ',podeAplicar);

//NOT (!) 
let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado: ',candidatoRecusado);
