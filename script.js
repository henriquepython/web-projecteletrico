
function result(){
    //tensão da residência
    let tensao = document.getElementById("tensao");

    //quarto
    let qQuarto = document.getElementById("quartos");
    let areaQuarto = document.getElementById("aquartos");
    let perimetroQuarto = document.getElementById("pquartos");

    //sala
    let qSala = document.getElementById("salas");
    let areaSala = document.getElementById("asalas");
    let perimetroSala = document.getElementById("psalas");

    //cozinha
    let qCozinha = document.getElementById("cozinhas");
    let areaCozinha = document.getElementById("acozinhas");
    let perimetroCozinha = document.getElementById("pcozinhas");


    //banheiro
    let qBanheiro = document.getElementById("banheiros");
    let areaBanheiro = document.getElementById("abanheiros");
    let perimetroBanheiro = document.getElementById("pbanheiros");

    const tugs = (x) => {
        return (x / 5);//virar arrow function
    }
    const lumins = (y) => {
        return (y / 4);//virar arrow function
    } 

    //final calculos comodos quarto
    let tugQuarto = (tugs(perimetroQuarto.value))*qQuarto.value; //mostrar no layout
    let lumiQuarto = (lumins(areaQuarto.value))*qQuarto.value; //mostrar no layout
    let potenciaQuarto = ((tugQuarto * 100) + (lumiQuarto * 60));
    let correntesQuarto = potenciaQuarto / tensao.value;
    //final calculos comodos sala
    let tugSala = (tugs(perimetroSala.value))*qSala.value; //mostrar no layout
    let lumiSala = (lumins(areaSala.value))*qSala.value; //mostrar no layout
    let potenciaSala = ((tugSala * 100) + (lumiSala * 60));
    let correntesSala = potenciaSala / tensao.value;
    //final calculos comodos cozinha
    let tugCozinha = (tugs(perimetroCozinha.value))*qCozinha.value; //mostrar no layout
    let lumiCozinha = (lumins(areaCozinha.value))*qCozinha.value; //mostrar no layout
    let potenciaCozinha = ((tugCozinha * 100) + (lumiCozinha * 60));
    let correntesCozinha = potenciaCozinha / tensao.value;
    //final calculos comodos banheiro
    let tugBanheiro = (tugs(perimetroBanheiro.value))*qBanheiro.value; //mostrar no layout
    let lumiBanheiro = (lumins(areaBanheiro.value))*qBanheiro.value; //mostrar no layout
    let potenciaBanheiro = ((tugBanheiro * 100) + (lumiBanheiro * 60));
    let correntesBanheiro = potenciaBanheiro / tensao.value;

    //total
    let potTotal = potenciaQuarto + potenciaSala + potenciaCozinha + potenciaBanheiro;

    //Padrão de entrada
    //FINAL
    let correnteDeProjeto = potTotal / tensao.value;
    let resull = `Sua potência total: ${potTotal.toFixed(2)}W\ncorrente de projeto : ${correnteDeProjeto.toFixed(2)}A |
    \nQuantidades aconselhadas segundo norma NBR5410:    \nSala: Tugs: ${tugSala.toFixed(2)}, Luminárias: ${lumiSala.toFixed(2)},
     Potência: ${potenciaSala.toFixed(2)}W, Corrente: ${correntesSala.toFixed(2)}|\nCozinha: Tugs: ${tugCozinha.toFixed(2)},
     Luminárias: ${lumiCozinha.toFixed(2)}, Potência: ${potenciaCozinha.toFixed(2)}W, Corrente: ${correntesCozinha.toFixed(2)}\n
     |Quarto: Tugs: ${tugQuarto.toFixed(2)}, Luminárias: ${lumiQuarto.toFixed(2)}, Potência: ${potenciaQuarto.toFixed(2)}W, 
     Corrente: ${correntesQuarto.toFixed(2)}\n|Banheiro: Tugs: ${tugBanheiro.toFixed(2)}, Luminárias: ${lumiBanheiro.toFixed(2)}, Potência: ${potenciaBanheiro.toFixed(2)}W, Corrente: ${correntesBanheiro.toFixed(2)}`;
    document.getElementById("resultados1").innerHTML = resull;
}
