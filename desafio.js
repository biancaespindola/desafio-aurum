// /**
//  * @param {string} string
//  * @param {number} limit
//  * @return {string}
//  */

var phrase = 'xxxyzzaaayy';
var limit = 1;
var tamanhaostring = phrase.length;
console.log('frase: ' + phrase);
console.log('tamanho da frase: ' + tamanhaostring);

var novaString = '';

for (var i = 0; i < phrase.length; i++) {
  var proxLetra = phrase[i + 1];

  if (phrase[i] !== proxLetra) {
    novaString = novaString + phrase[i];
  }
}
console.log('nova string: ' + novaString);

var indiceSequencia = phrase.indexOf('zz');

console.log('indice da sequencia ' + indiceSequencia);

var palavra = 'a';
var palavraVezes = palavra.repeat(3); //metodo interessante para repetir string

console.log('multiplicando palavra ' + palavraVezes);

//teste com expressões regulares

// var regexp = new RegExp(/aa/i);
// var resultado = phrase.regexp.exec(str);
// console.log('resultado usando expressões regulares: ' + resultado);

// for (var i = 0; i < phrase.length; i++) {
//   var proxLetra = phrase[i + 1];
//   var primeiroIndice = 0;
//   var ultimoIndice = 0;

//   if (phrase[i].IndexOf('xxx') !== -1) {
//     novaString = phrase.slice(i)
//   }
// }
// console.log('nova string: ' + novaString);

// removeRepeated();

// const removeRepeated = (phrase, limit) => {
//   //Your logic goes
//   for (var i = 0; i <= phrase.length; i++) {
//     var aux = phrase[i];
//     if (aux == phrase[i + 1]) {
//     }
//   }

//   return newString;
// };

// export default removeRepeated;
