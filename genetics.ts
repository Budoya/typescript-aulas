    //flag?: string // ? == atributo opcional
    class Fila<T> {
        private elementos: T[] = [];
      
        adicionar(elemento: T): void {
          this.elementos.push(elemento);
        }
      
        remover(): T | undefined {
          if (this.elementos.length === 0) {
            return undefined;
          }
          return this.elementos.shift();
        }
      }
      
      const filaDeNumeros = new Fila<number>();
      filaDeNumeros.adicionar(10);
      filaDeNumeros.adicionar(20);
      console.log(filaDeNumeros.remover()); // 10
      console.log(filaDeNumeros.remover()); // 20
      
      const filaDeTextos = new Fila<string>();
      filaDeTextos.adicionar("Olá");
      filaDeTextos.adicionar("Mundo!");
      console.log(filaDeTextos.remover()); // "Olá"
      console.log(filaDeTextos.remover()); // "Mundo!"
      
      /*genetics tb visto como <type> definem o como sera a classe variando desde deixar em aberto para receber qualquer tipo ate selecionar
      tipos de classe pre definidas tais como objetos ou interfaces
      no metodo abaixo é definido restricoes de tipos separadas pelo operador ou tambem visto assim || ou |
      metodo extends seria o que possibilitaria atribuir o valor a obejtos e interfaces
      */
      interface Pilha<T extends string | number> {
        push(elemento: T): void;
        pop(): T | undefined;
      }
      
      function
      