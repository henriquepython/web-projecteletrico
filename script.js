
//tensão da residência

var tensao = document.getElementById("tensao");

//quarto
var qquarto = document.getElementById("quartos");
var areaquarto = document.getElementById("aquartos");
var perimetroquarto = document.getElementById("pquartos");

//sala
var qsala = document.getElementById("salas");
var areasala = document.getElementById("asalas");
var perimetrosala = document.getElementById("psalas");

//cozinha
var qcozinha = document.getElementById("cozinhas");
var areacozinha = document.getElementById("acozinhas");
var perimetrocozinha = document.getElementById("pcozinhas");


//banheiro
var qbanheiro = document.getElementById("banheiros");
var areabanheiro = document.getElementById("abanheiros");
var perimetrobanheiro = document.getElementById("pbanheiros");

const tugs = (x) => {
    var tomada = math.trunc(x / 5);
    return tomada.values//virar arrow function
}
const lumins = (y) => {
    var luminarias = math.trunc(y / 5);
    return luminarias.values//virar arrow function
} 


//final calculos comodos quarto
var tugquarto = (tugs(perimetroquarto.values))*qquarto.values; //mostrar no layout
var lumiquarto = (lumins(areaquarto.values))*qquarto.values; //mostrar no layout
var potenciaquarto = ((tugquarto * 100) + (lumiquarto * 60));
var correntesquarto = potenciaquarto1 / tensao;
//final calculos comodos sala
var tugsala = (tugs(perimetrosala.values))*qsala.values; //mostrar no layout
var lumisala = (lumins(areasala.values))*qsala.values; //mostrar no layout
var potenciasala = ((tugsala * 100) + (lumisala1 * 60));
var correntessala = potenciasala / tensao;
//final calculos comodos cozinha
var tugcozinha = (tugs(perimetrocozinha.values))*qcozinha.values; //mostrar no layout
var lumicozinha = (lumins(areacozinha.values))*qcozinha.values; //mostrar no layout
var potenciacozinha = ((tugcozinha * 100) + (lumicozinha * 60));
var correntescozinha = potenciacozinha / tensao;
//final calculos comodos banheiro
var tugbanheiro = (tugs(perimetrobanheiro.values))*qbanheiro.values; //mostrar no layout
var lumibanheiro = (lumins(areabanheiro.values))*qbanheiro.values; //mostrar no layout
var potenciabanheiro = ((tugbanheiro * 100) + (lumibanheiro * 60));
var correntesbanheiro = potenciabanheiro / tensao;

//total
var pottotal = potenciaquarto + potenciasala + potenciacozinha + potenciabanheiro + potenciaexclusivo;

//Padrão de entrada
//FINAL
var correntedeprojeto = pottotal / tensao;

a = 0

console.log(`sua potência total: ${pottotal}W\n, corrente de projeto : ${correntedeprojeto}A\nPotência Sala: ${potenciasala}W\nPotência cozinha: ${potenciacozinha}W\nPotencia quartos: ${potenciaquarto}W\nPotência Banheiros: ${potenciabanheiro}W);
