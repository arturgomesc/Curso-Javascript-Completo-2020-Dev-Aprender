// Date : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const date1 = new Date(); // mostra exatamente a data e hora atual
const date2 = new Date('January 17 2023 18:12');
const date3 = new Date(2023, 0, 17, 18, 14);

date3.setFullYear(2030);

console.log(date3);