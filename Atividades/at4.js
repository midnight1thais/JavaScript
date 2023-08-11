
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).


//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
// let pergunta1 = prompt("Digite a sua idade: ")

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

let pergunta1 = Number(prompt("Digite a sua idade: "))
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

function ConfereCarteira(num){ 
    if (num >= 18){
        console.log("Você pode dirigir")
    }
    else{
        console.log("Você não pode digirir")
    }
}

ConfereCarteira(pergunta1)


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let pergunta2 = prompt("Digite o turno que você estuda (M (matutino) ou V (Vespertino) ou N (Noturno)): ")

function ConfereTurno(turno){
    if ((turno !== 'M') && (turno !=='V') && (turno !=='N')){
        console.log("Precisa escrever M (matutino) ou V (Vespertino) ou N (Noturno)")
    }
    else if (turno === 'M'){
        console.log("Bom dia!")
    }
    else if (turno === 'V'){
        console.log("Bom tarde!")
    }
    else if (turno === 'N'){
        console.log("Bom noite!")
    }
}

ConfereTurno(pergunta2)

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let pergunta3 = prompt("Digite o turno que você estuda (M (matutino) ou V (Vespertino) ou N (Noturno)): ")

switch (pergunta3) {
    case 'M':
        console.log("Bom dia!");
        break;
    case 'V': 
        console.log("Bom tarde!");
        break;
    case 'N':
        console.log("Boa noite!");
        break;
    default:
        console.log("Precisa escrever M (matutino) ou V (Vespertino) ou N (Noturno)");
        break;
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let pergunta4 = prompt("Digite o gênero e o valor do ingresso do filme que está disponível:").split(' ')

let genero = pergunta4[0].toUpperCase()


function Filme(genero,valor){
    if((genero === 'FANTASIA') && (valor <= 15)){
        console.log("Bom filme!")
    }
    else {
        console.log("Escolha outro filme :(")
    }
}

console.log(genero)
Filme(genero,pergunta4[1])


// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

let pergunta5 = prompt("Digite o gênero e o valor do ingresso do filme que está disponível:").split(' ')

let genero2 = pergunta5[0].toUpperCase()


function Filme2(genero,valor){
    if((genero === 'FANTASIA') && (valor <= 15)){
        let lista = "1 - pipoca salgada\n2 - pipoca doce\n3 - salgadinho\n4 - doce aleatório";
        let escolha = Number(prompt("Escolha um item:\n\n" + lista));
        switch (escolha) {
            case 1:
                console.log("Bom filme! Aproveite sua pipoca salgada");
                break;
            case 2:
                console.log("Bom filme! Aproveite sua pipoca doce");
                break;
            case 3:
                console.log("Bom filme! Aproveite seu salgadinho");
                break;
            case 4:
                console.log("Bom filme! Aproveite seu doce aleatório");
                break;
            default:
                console.log("Precisa escolher entre '1', '2', '3' e '4'");
                break;
        }
        
    }
    else {
        console.log("Escolha outro filme :(")
    }
}

console.log(genero2)
Filme2(genero2,pergunta5[1])