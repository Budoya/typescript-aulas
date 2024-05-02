//tipos literais dizem o proprio nome, nao pertencem aos tipos primitivos
let literal: "este é o valor dele"
literal = "fsaf" //falso ele so obdece ao que é o valor dele de fato

//outra forma de utiliza los
let valor : 3 | 5 | 10
// esta barra "|" serve igual "ou" pois seus valores podem ser 3 ou 5 ou 10 apenas
//outra forma de utiliza las
let doistipos : boolean | number
//se tentar atribuir uma string a ele nao funcionara de resto tudo pode

// como reutilizar o literal, usando type

type planets = "mercurio" | "terra" | "plutao"
let planeta : planets
//planeta e qualquer outra variavel que tiver esta mesma atribuicao tera os valores de planets


//nao entendi muito bem...
type callbacks = (name:string) => void

function type(callback:callbacks){
let name = ""
    callback(name)
}