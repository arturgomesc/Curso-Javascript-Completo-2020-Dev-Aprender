// Verbo ++ Substantivo

let corSite = "azul";

function resetaCor() {
    corSite = "";
};

console.log(corSite);
resetaCor();
console.log(corSite);

//---------------//

function resetaCor(cor) {
    corSite = cor;
};

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

//---------------//

function resetaCor(cor,tonalidade) {
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);

