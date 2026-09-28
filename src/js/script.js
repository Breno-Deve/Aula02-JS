// DECLARAÇÕES

let nome="Fiap";
const idade =30;
let altura=1.75;
let estudante= true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof atura);
console.log(typeof estudante);

// METODOS DE EXIBIÇÃO

alert("Bem-vindo ao sistema") 

let nomeUsuario= prompt("Qual é o nome do Usuario?")
console.log(`Ola, ${nomeUsuario}`)

let desejaContinuar = confirm("Deseja realmente Continuar?")
console.log("Resposta",desejaContinuar)

// OPERADORES (ARITMÉTICOS, COMPARAÇÃO E LÓGICOS)

let soma =  10 +5;
console.log(soma)
let multiplicacao = 4 *2;
console.log(multiplicacao)
let subtracao = 10-5;
console.log(subtracao)
let resto= 10 % 3;
console.log(resto)
let divisao =5 / 3;
console.log(divisao)

// COMPARAÇÃO

let a =10;
let b= "10";

// ATRIBUIR (=)
// COMPARA O VALOR (==)
// COMPARA O VALOR E O TIPO DA VARIAVEL (===)

console.log(a == b); //COMPARA
console.log(a === b); //COMPARA E VALIDA
console.log(a > b); //MAIOR
console.log(a >= b); //MAIOR IGUAL
console.log( a != b); //DIFEENTE
console.log( a < 10);

// OPERADO AND && - AS DUAS OPERAÇÕES TEM QUE SER VERDADEIRAS
console.log(b < a && a > b);
// OPERADOR OR || - UMA DAS OPERAÇÕES TEM QUE SER VERDADEIRA
console.log( a>20 || b >= a);

let temIdade =18;
let habilitacao=true;

let dirigir =(idade >= 18) && habilitacao;
console.log("O Usuario pode Dirigir ?", dirigir)


// ESTRUTURA CONDICIONAL

// IF
if(false){
    console.log("É VERDADEIRO")
}

// IF/ELSE

if(false){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

