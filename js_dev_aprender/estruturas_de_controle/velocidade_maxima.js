// velocidade máxima até 70km/h
// a cada 5km acima do limite ganha 1 ponto
// Math.floor()
// caso pontos acima de 12 => carteira suspendida

verificar_velocidade(70)

function verificar_velocidade(velocidade) {
    if (velocidade <= 70)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - 70) / 5))
        if (pontos >= 12)
        console.log('Carteira suspendida');
        else
        console.log('Pontos: ',pontos);
    } 
}