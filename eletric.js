
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

//Quarto
   

#Padrão de entrada
#FINAL
potenciatotal = (potenciatot1+potenciatot2+potenciatot3+potenciatot4+ptue1)
correntedeprojeto = potenciatotal / tensao

a = 0

#PARTE WEB DOS MATERIAIS DO PADRÃO DE ENTRADA
import webbrowser
while a == 0:
    padrao = int(input('Informe o tipo do padrão\n1 para monofasico\n2 para bifásico\n3 para trifásico\n'))
    if padrao == 1:
        print('materiais para padrão de entrada monofásico:\n')
        webbrowser.open('http://servicos.coelba.com.br/comercial-industrial/Pages/Padr%C3%A3o%20de%20Entrada/monofasico.aspx')
        a = int(input('Pode continuar 1 para não 0 para sim\n'))
    elif padrao == 2:
        print('materiais para padrão de entrada bifásico:\n')
        webbrowser.open('http://servicos.coelba.com.br/comercial-industrial/Pages/Padr%C3%A3o%20de%20Entrada/bifasico.aspx')
        a = int(input('Pode continuar 1 para não 0 para sim\n'))

print('sua potência total: {:.2f}W\n, corrente de projeto : {:.2f}A\nPotência Sala: {:.2f}W\nPotência cozinha: {:.2f}W\nPotencia quartos: {:.2f}W\nPotência Banheiros: {:.2f}W\nPotência circuitos exclusivos{:.2f}W'.format(potenciatotal,correntedeprojeto,potenciatot2,potenciatot3,potenciatot1,potenciatot4,ptue1))
