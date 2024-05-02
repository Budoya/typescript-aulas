//omit é usado para gerar um novo tipo apartir de um pre existente com a funcionalidade de remover um ou mais atributos do tipo que ele "herda"
//exemplo
interface Pessoa {
    nome: string;
    idade: number;
    endereco: Endereco;
  }
  
  interface Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
  }
  type Cliente = Omit<Pessoa, "endereco">;
  //o tipo cliente sera igual a pessoa com execessao das caracteristicas do endereco
  //assim tendo apenas os atributos nome e idade