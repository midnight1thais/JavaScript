//-------Atividade Array
// 1. Faça um programa, seguindo os passos:

    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`



//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array


const tarefas = prompt("Digite 3 tarefas que precisa realizar hoje: ").split(" ")

    
// c) Imprima o array no console

console.log(tarefas)
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const indice = parseInt(prompt("Digite o índice de uma tarefa que já foi realizada (0, 1 ou 2): "))

    
//e) Remova da lista o item de índice que o usuário escolheu.

const remover = tarefas.splice(indice)

    
//f) Imprima o array no console

console.log(tarefas)


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).

function unificarPessoa(nome, idade, endereco, profissao) {
    let mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`;
    return mensagem;
  }

  
console.log(unificarPessoa("Joao", 34, "Rua das Palmeiras, 890", "jornalista"));




// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somaN(num1, num2) {
  const soma = (num1 + num2) 
  return soma 

}

console.log(somaN(1,2))


// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function TF(num1,num2) {
  if (num1 >= num2) {
    return true
  }
  else {
    return false
  }
}

console.log(TF(1, 9))

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function PI(num) {
  if (num % 2 === 0) {
    return true
  }
  else {
    return false
  }
}

console.log(PI(10))

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function mensagem(string) {
  console.log(string.length)
  return string.toUpperCase()  
}

console.log(mensagem(`string`))

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

function soma(num1, num2){
  const operacao = (num1 + num2)
  return operacao
}

function subtração(num1, num2){
  const operacao = (num1 - num2)
  return operacao
}

function multiplicação(num1, num2){
  const operacao = (num1 * num2)
  return operacao
}

function divisão(num1, num2){
  const operacao = (num1 / num2)
  return operacao
}

const inserir = prompt("Digite dois numeros: ").split(" ")

console.log(soma((parseInt(inserir[0])),(parseInt(inserir[1]))))
console.log(subtração((parseInt(inserir[0])),(parseInt(inserir[1]))))
console.log(multiplicação((parseInt(inserir[0])),(parseInt(inserir[1]))))
console.log(divisão((parseInt(inserir[0])),(parseInt(inserir[1]))))