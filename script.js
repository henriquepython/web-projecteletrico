
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
    return tomada.value//virar arrow function
}
const lumins = (y) => {
    var luminarias = math.trunc(y / 5);
    return luminarias.value//virar arrow function
} 


//final calculos comodos quarto
var tugquarto = (tugs(perimetroquarto.value))*qquarto.value; //mostrar no layout
var lumiquarto = (lumins(areaquarto.value))*qquarto.value; //mostrar no layout
var potenciaquarto = ((tugquarto * 100) + (lumiquarto * 60));
var correntesquarto = potenciaquarto1 / tensao.value;
//final calculos comodos sala
var tugsala = (tugs(perimetrosala.value))*qsala.value; //mostrar no layout
var lumisala = (lumins(areasala.value))*qsala.value; //mostrar no layout
var potenciasala = ((tugsala * 100) + (lumisala1 * 60));
var correntessala = potenciasala / tensao.value;
//final calculos comodos cozinha
var tugcozinha = (tugs(perimetrocozinha.value))*qcozinha.value; //mostrar no layout
var lumicozinha = (lumins(areacozinha.value))*qcozinha.value; //mostrar no layout
var potenciacozinha = ((tugcozinha * 100) + (lumicozinha * 60));
var correntescozinha = potenciacozinha / tensao.value;
//final calculos comodos banheiro
var tugbanheiro = (tugs(perimetrobanheiro.value))*qbanheiro.value; //mostrar no layout
var lumibanheiro = (lumins(areabanheiro.value))*qbanheiro.value; //mostrar no layout
var potenciabanheiro = ((tugbanheiro * 100) + (lumibanheiro * 60));
var correntesbanheiro = potenciabanheiro / tensao.value;

//total
var pottotal = potenciaquarto + potenciasala + potenciacozinha + potenciabanheiro + potenciaexclusivo;

//Padrão de entrada
//FINAL
var correntedeprojeto = pottotal / tensao.value;

a = 0

console.log(`sua potência total: ${pottotal}W\n, corrente de projeto : ${correntedeprojeto}A\nPotência Sala: ${potenciasala}W\nPotência cozinha: ${potenciacozinha}W\nPotencia quartos: ${potenciaquarto}W\nPotência Banheiros: ${potenciabanheiro}W)`;