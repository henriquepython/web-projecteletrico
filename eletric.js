
//tensão da residência

var tensao = document.getElementById(tensao.values);

//quarto
var qquarto = document.getElementById(quartos.values);
var areaquarto = document.getElementById(aquartos.values);
var perimetroquarto = document.getElementById(pquartos.values);

//sala
var qsala = document.getElementById(salas.values);
var areasala = document.getElementById(asalas.values);
var perimetrosala = document.getElementById(psalas.values);

//cozinha
var qcozinha = document.getElementById(cozinhas.values);
var areacozinha = document.getElementById(acozinhas.values);
var perimetrocozinha = document.getElementById(pcozinhas.values);


//banheiro
var qbanheiro = document.getElementById(banheiros.values);
var areabanheiro = document.getElementById(abanheiros.values);
var perimetrobanheiro = document.getElementById(pbanheiros.values);

const tugs = (x) => {
    var tomada = math.trunc(x / 5);
    return tomada.values//virar arrow function
}
const lumins = (y) => {
    var luminarias = math.trunc(y / 5);
    return luminarias.values//virar arrow function
} 


//final calculos comodos quarto
var tugquarto = (tugs(perimetroquarto))*qquarto; //mostrar no layout
var lumiquarto = (lumins(areaquarto))*qquarto; //mostrar no layout
var potenciaquarto = ((tugquarto * 100) + (lumiquarto * 60));
var correntesquarto = potenciaquarto1 / tensao;
//final calculos comodos sala
var tugsala = (tugs(perimetrosala))*qsala; //mostrar no layout
var lumisala = (lumins(areasala))*qsala; //mostrar no layout
var potenciasala = ((tugsala * 100) + (lumisala1 * 60));
var correntessala = potenciasala / tensao;
//final calculos comodos cozinha
var tugcozinha = (tugs(perimetrocozinha))*qcozinha; //mostrar no layout
var lumicozinha = (lumins(areacozinha))*qcozinha; //mostrar no layout
var potenciacozinha = ((tugcozinha * 100) + (lumicozinha * 60));
var correntescozinha = potenciacozinha / tensao;
//final calculos comodos banheiro
var tugbanheiro = (tugs(perimetrobanheiro))*qbanheiro; //mostrar no layout
var lumibanheiro = (lumins(areabanheiro))*qbanheiro; //mostrar no layout
var potenciabanheiro = ((tugbanheiro * 100) + (lumibanheiro * 60));
var correntesbanheiro = potenciabanheiro / tensao;

//total
var pottotal = potenciaquarto + potenciasala + potenciacozinha + potenciabanheiro + potenciaexclusivo;

//Padrão de entrada
//FINAL
var correntedeprojeto = pottotal / tensao;

a = 0

console.log(`sua potência total: ${pottotal}W\n, corrente de projeto : ${correntedeprojeto}A\nPotência Sala: ${potenciasala}W\nPotência cozinha: ${potenciacozinha}W\nPotencia quartos: ${potenciaquarto}W\nPotência Banheiros: ${potenciabanheiro}W);
