
function result(){
    //tensão da residência
    let tensao = document.getElementById("tensao");

    //quarto
    let qquarto = document.getElementById("quartos");
    let areaquarto = document.getElementById("aquartos");
    let perimetroquarto = document.getElementById("pquartos");

    //sala
    let qsala = document.getElementById("salas");
    let areasala = document.getElementById("asalas");
    let perimetrosala = document.getElementById("psalas");

    //cozinha
    let qcozinha = document.getElementById("cozinhas");
    let areacozinha = document.getElementById("acozinhas");
    let perimetrocozinha = document.getElementById("pcozinhas");


    //banheiro
    let qbanheiro = document.getElementById("banheiros");
    let areabanheiro = document.getElementById("abanheiros");
    let perimetrobanheiro = document.getElementById("pbanheiros");

    const tugs = (x) => {
        return (x / 5);//virar arrow function
    }
    const lumins = (y) => {
        return (y / 4);//virar arrow function
    } 

    //final calculos comodos quarto
    let tugquarto = (tugs(perimetroquarto.value))*qquarto.value; //mostrar no layout
    let lumiquarto = (lumins(areaquarto.value))*qquarto.value; //mostrar no layout
    let potenciaquarto = ((tugquarto * 100) + (lumiquarto * 60));
    let correntesquarto = potenciaquarto / tensao.value;
    //final calculos comodos sala
    let tugsala = (tugs(perimetrosala.value))*qsala.value; //mostrar no layout
    let lumisala = (lumins(areasala.value))*qsala.value; //mostrar no layout
    let potenciasala = ((tugsala * 100) + (lumisala * 60));
    let correntessala = potenciasala / tensao.value;
    //final calculos comodos cozinha
    let tugcozinha = (tugs(perimetrocozinha.value))*qcozinha.value; //mostrar no layout
    let lumicozinha = (lumins(areacozinha.value))*qcozinha.value; //mostrar no layout
    let potenciacozinha = ((tugcozinha * 100) + (lumicozinha * 60));
    let correntescozinha = potenciacozinha / tensao.value;
    //final calculos comodos banheiro
    let tugbanheiro = (tugs(perimetrobanheiro.value))*qbanheiro.value; //mostrar no layout
    let lumibanheiro = (lumins(areabanheiro.value))*qbanheiro.value; //mostrar no layout
    let potenciabanheiro = ((tugbanheiro * 100) + (lumibanheiro * 60));
    let correntesbanheiro = potenciabanheiro / tensao.value;

    //total
    let pottotal = potenciaquarto + potenciasala + potenciacozinha + potenciabanheiro;

    //Padrão de entrada
    //FINAL
    let correntedeprojeto = pottotal / tensao.value;
    let resull = `Sua potência total: ${pottotal.toFixed(2)}W\ncorrente de projeto : ${correntedeprojeto.toFixed(2)}A |
    \nQuantidades aconselhadas segundo norma NBR5410:    \nSala: Tugs: ${tugsala.toFixed(2)}, Luminárias: ${lumisala.toFixed(2)},
     Potência: ${potenciasala.toFixed(2)}W, Corrente: ${correntessala.toFixed(2)}|\nCozinha: Tugs: ${tugcozinha.toFixed(2)},
     Luminárias: ${lumicozinha.toFixed(2)}, Potência: ${potenciacozinha.toFixed(2)}W, Corrente: ${correntescozinha.toFixed(2)}\n
     |Quarto: Tugs: ${tugquarto.toFixed(2)}, Luminárias: ${lumiquarto.toFixed(2)}, Potência: ${potenciaquarto.toFixed(2)}W, 
     Corrente: ${correntesquarto.toFixed(2)}\n|Banheiro: Tugs: ${tugbanheiro.toFixed(2)}, Luminárias: ${lumibanheiro.toFixed(2)}, Potência: ${potenciabanheiro.toFixed(2)}W, Corrente: ${correntesbanheiro.toFixed(2)}`;
    document.getElementById("resultados1").innerHTML = resull;
}
