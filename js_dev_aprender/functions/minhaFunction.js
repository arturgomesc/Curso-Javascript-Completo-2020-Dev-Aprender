function Game(nomeGame,generoGame,tamanhoGame) {
    this.nomeGame = nomeGame,
    this.generoGame = generoGame,
    this.tamanhoGame = tamanhoGame,
    this.iniciar = function(){
            console.log("Inicializando o jogo...");
    }
}

const game = new Game('Fallout 3','Acao e Aventura',  7)
console.log(game);