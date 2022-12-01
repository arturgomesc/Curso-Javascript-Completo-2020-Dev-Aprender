// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - Not a Number

// Truthy

console.log(false || 'rafael');

console.log(false || 1);

console.log(false || 1 || 3); // priorizar a primeira condição

let corPersonalizada = 'vermelho';
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil); // assim que acha o primeiro valor Truthy, ignora o resto

