
// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

const compras = {
    nome: 'Paula',
    Lcompras: ['banana', 'maça', 'caju']

}

console.log(`Olá, ${compras.nome}. Hoje seus itens prioritários na lista de comprar são ${compras.Lcompras[0]}, ${compras.Lcompras[1]} e ${compras.Lcompras[2]} `)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const novasCompras = {
    ...compras,
    Lcompras: ['agua', 'arroz', 'feijao']
}

console.log(`Olá, ${novasCompras.nome}. Hoje seus itens prioritários na lista de comprar são ${novasCompras.Lcompras[0]}, ${novasCompras.Lcompras[1]} e ${novasCompras.Lcompras[2]} `)

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const ob1 = {
    nome: 'Ana',
    idade: 24,
    profissao: 'Médica Pediatra'
}

const ob2 = {
    nome: 'Paula',
    idade: 26,
    profissao: 'Astronauta'
}
    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

function Aobjetos(ob1,ob2){
    
    console.log(`O valor de "nome": ${ob1.nome} e ${ob2.nome}, O numero de caracteres do valor "nome": ${ob1.nome.length}, ${ob2.nome.length}, O valor de "idade": ${ob1.nome} e ${ob2.nome}, O valor de "profissão": ${ob1.profissao} e ${ob2.profissao}, O numero de caracteres do valor "profissão": ${ob1.profissao.length} e ${ob2.profissao.length}`)
        
    
}
    
Aobjetos(ob1,ob2)

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

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

//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function passa(fr1,fr2,fr3){
    const novoCarrinho = [...carrinho, fr1, fr2,fr3]
    return novoCarrinho
}

    
//     - 💡  Dica
        
//       Aqui você deve usar o método **push()**
        
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(passa(fruta1,fruta2,fruta3))

// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

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

