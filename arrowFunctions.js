
//funcao tradicional
function areaRetangulo(largura, altura) {
    return largura * altura;
}

function Pessoa(nome) {
    this.nome = nome;
  }
  
  var joao = new Pessoa('João');
  console.log(joao.nome);  // Saída: 'João'


class Animal {
    falar() { return 'Eu sou um animal'; }
}
class Gato extends Animal {
    falar() { return super.falar() + ' e um gato'; }
}
var gato = new Gato();
console.log(gato.falar()); // Saída: 'Eu sou um animal e um gato'

function soma() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
console.log(soma(5, 10, 15));// Saída: 30



//------------------------
//arrow functions
const soma = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(soma(4,6));// Saída 10


function Timer() {
    this.segundos = 0;
    setInterval(() => {
        this.segundos++;
        console.log(this.segundos);
    }, 1000);
 }
const meuTimer = new Timer();
// 'this' refere-se ao contexto do objeto 'meuTimer', mesmo dentro da Arrow Function.

const numeros = [1, 2, 3, 4];
const numerosDobro = numeros.map(n => n * 2);
console.log(numerosDobro);//[2, 4, 6, 8]

const dobrar = x => x * 2; console.log(dobrar(4)); 
// 8

const areaRetangulo = (largura, altura) => largura * altura;
