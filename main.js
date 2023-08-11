// Seleciona todos os elementos com a classe 'card'
var cards = document.querySelectorAll('.card');

// Itera sobre cada card
cards.forEach(function(card) {
  var content = card.querySelector('.content');
  
  // Adiciona um ouvinte de evento a cada card
  content.addEventListener('click', function() {
    card.classList.toggle('active');
  });
});





function at1() {
  // -------Atividade 1 -----

  // 1.

  function unificarPessoa(nome, idade, endereco, profissao) {
    let mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`;
    return mensagem;
  }


  console.log(unificarPessoa("Joao", 34, "Rua das Palmeiras, 890", "jornalista"));


  // 2. 
  function somaN(num1, num2) {
    const soma = (num1 + num2) 
    return soma 

  }

  console.log(somaN(1,2))


  // 3.

  function TF(num1,num2) {
    if (num1 >= num2) {
      return true
    }
    else {
      return false
    }
  }

  console.log(TF(1, 9))

  // 4.

  function PI(num) {
  if (num % 2 === 0) {
    return true
  }
  else {
    return false
  }
  }

  console.log(PI(10))

  // 5.

  function mensagem(string) {
    console.log(string.length)
    return string.toUpperCase()  
  }

  console.log(mensagem(`string`))

  //Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário.

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
}




function at2() {
  // Atividades

  // 1. 

  function AlterAL(altura,largura) {
    area = altura * largura
    return area
  }

  valores1 = prompt("Digite a altura e a largura: ").split(" ")

  console.log(AlterAL(valores1[0], valores1[1]))

  // 2. 

  function AnoAtual(atual,nascimento) {
    idade = atual - nascimento
    return idade
  }

  valores2 = prompt("Digite o ano atual e seu ano de nascimento do usuário: ").split(" ")

  console.log(AnoAtual(valores2[0], valores2[1]))


  // 3.

  function IndiceMassa(peso,altura){
    IMC = peso / (Math.pow(altura,2))
    return IMC
  }

  valores3 = prompt("Digite o peso em kg e a altura em metros de uma pessoa: ").split(" ")

  console.log(IndiceMassa(valores3[0], valores3[1]))


  // 4.

  function Tamanho(str1,str2){
    strings = str1.length === str2.length
    return strings
  }

  valores4 = prompt("Digite duas strings: ").split(" ")

  console.log(Tamanho(valores4[0], valores4[1]))

  //  5.

  function Arr(arr){
    UltimoElemento = arr[(arr.length) - 1]
    return UltimoElemento
  }

  valores5 = prompt("Digite várias coisas para uma lista: ").split(" ")

  console.log(Arr(valores5))

  // 6.

  function Letras(str1,str2){
    let letras = str1.toUpperCase() === str2.toUpperCase()
    return letras
  }

  valores6 = prompt("Digite duas strings: ").split(" ")

  console.log(Letras(valores6[0], valores6[1]))

  // DESAFIO = Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
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

}






function at3() {

// Resolva os passos a seguir: 
    
// 1. Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
    
// 2. Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: 'caqui',
    disponibilidade: true
}

const fruta2 = {
    nome: 'melancia',
    disponibilidade: true
}

const fruta3 = {
    nome: 'maracuja',
    disponibilidade: true
}

// 3. Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function passa(fr1,fr2,fr3){
    const novoCarrinho = [...carrinho, fr1, fr2,fr3]
    return novoCarrinho
}


// 4. Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(passa(fruta1,fruta2,fruta3))

// DESAFIO = Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function pergunta(){
    const valores = prompt("Digite seu nome, sua idade e sua profissão: ").split(' ')
    nome = valores[0]
    idade = valores[1]
    profissao = valores[3]

    const objeto = {
        nome: pergunta.nome,
        idade: pergunta.idade,
        profissao: pergunta.profissao

    }

    return objeto, typeof(objeto)

}

console.log(pergunta())


}






function at4() {
    // Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

  let pergunta1 = Number(prompt("Digite a sua idade: "))
      
  // 1. Veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

  function ConfereCarteira(num){ 
      if (num >= 18){
          console.log("Você pode dirigir")
      }
      else{
          console.log("Você não pode digirir")
      }
  }

  ConfereCarteira(pergunta1)


  // 2. Faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

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

}






function at5() {

      function mostra(frase) {

          alert(frase);
  }

  var numeroPensado = Math.round(Math.random() * 10);

  var tentativas = 1;

  while(tentativas <= 3) {

      var chute = parseInt(prompt("Digite seu chute!"));

      if(chute == numeroPensado) {

          mostra("Você ACERTOU, o número pensado era " + numeroPensado);
          break;

      } else {

          mostra("Você ERROU!");
      }

      tentativas++;
  }

  mostra("FIM");

}