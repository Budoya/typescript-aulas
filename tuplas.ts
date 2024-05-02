type Pessoa = [string, number, string]; // Definindo a tupla "Pessoa"
const pessoa1: Pessoa = ["João", 30, "Desenvolvedor"]; // Declarando e inicializando a tupla

// Acessando os elementos por índice:
console.log(pessoa1[0]); // Acessa o nome: "João"
console.log(pessoa1[1]); // Acessa a idade: 30
console.log(pessoa1[2]); // Acessa a profissão: "Desenvolvedor"
//mais um mecanismos de tipagem semelhante ao c# que define o tamanho do array e seus tipos antes de determinar qualquer coisa como no js