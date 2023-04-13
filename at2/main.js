// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

function AlterAL(altura,largura) {
    area = altura * largura
    return area
}

valores1 = prompt("Digite a altura e a largura: ").split(" ")

console.log(AlterAL(valores1[0], valores1[1]))

// // 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

function AnoAtual(atual,nascimento) {
    idade = atual - nascimento
    return idade
}

valores2 = prompt("Digite o ano atual e seu ano de nascimento do usuário: ").split(" ")

console.log(AnoAtual(valores2[0], valores2[1]))


// // 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

function IndiceMassa(peso,altura){
    IMC = peso / (Math.pow(altura,2))
    return IMC
}

valores3 = prompt("Digite o peso em kg e a altura em metros de uma pessoa: ").split(" ")

console.log(IndiceMassa(valores3[0], valores3[1]))


// // 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

function Tamanho(str1,str2){
    strings = str1.length === str2.length
    return strings
}

valores4 = prompt("Digite duas strings: ").split(" ")

console.log(Tamanho(valores4[0], valores4[1]))

// // 5. Escreva uma função que recebe um array e retorna o último elemento.

function Arr(arr){
    UltimoElemento = arr[(arr.length) - 1]
    return UltimoElemento
}

valores5 = prompt("Digite várias coisas para uma lista: ").split(" ")

console.log(Arr(valores5))

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function Letras(str1,str2){
    let letras = str1.toUpperCase() === str2.toUpperCase()
    return letras
}

valores6 = prompt("Digite duas strings: ").split(" ")

console.log(Letras(valores6[0], valores6[1]))

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

function Usuario(anoAtual, anoNascimento, anoEmissao) {
    idade = anoAtual - anoNascimento
    tempo = anoAtual - anoEmissao 
    if (idade <= 20){
        if (tempo === 5){ 
            console.log("tua carteira precisa ser renovada")
        }
        else {
            console.log("Ta de boa")
        }
    }
    else if (idade > 20 && idade <= 50){
        if (tempo === 10){ 
            console.log("tua carteira precisa ser renovada")
        }
        else {
            console.log("Ta de boa")
        }
    }
    else if (idade > 50){
        if (tempo === 15){ 
            console.log("tua carteira precisa ser renovada")
        }
        else {
            console.log("Ta de boa")
        }
    }
}

valores7 = prompt(" Digite ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem): ").split(" ")

console.log(Usuario(valores7[0], valores7[1], valores7[2]))

// Opções para teste:

// 2023 2005 2019 = Ta de boa
// 2023 2005 2018 = renovação

// 2023 1990 2019 = Ta de boa
// 2023 1990 2013 = renovação

// 2023 1920 2019 = Ta de boa
// 2023 1920 2008 = renovação
