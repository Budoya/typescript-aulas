let tudo : any
//quebra a tipagem padrao do ts para funcionar semelhantemente ao js

let desconhecido : unknown
//pode ser atribuido qualquer valor apos esta definicao com execessao do caso abaixo
let string : string
string = desconhecido
//sempre dara erro

let nunca :never
//impedi a atribuicao de qualquer tipo a esta variavel