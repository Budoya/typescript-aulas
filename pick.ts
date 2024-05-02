//quanto ao pick ele é semelhante ao omit porém ao contrario
//ao inves de remover atributos nesse processo de heranca ele apenas pega os atributos selecionados
interface Pessoa {
    nome: string;
    idade: number;
    endereco: Endereco;
    telefone: string;
  }
  
  interface Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
  }
  type Cliente = Pick<Pessoa, "nome" | "idade" | "endereco">;
  //o cliente neste caso apenas tera as caracteristicas selecionadas