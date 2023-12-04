const readlinesync = require('readline-sync');
const { verificarAdivinanza } = require('./adivinanza');
const Chance = require('chance');
const chance = new Chance ();
const numeroAlt = require ('chance');

const elegirNum = () => {
    return readlinesync.question('Elegi un numero : ');
};

const laAdivinanza = (numeroSecreto, numeroElegido) => {
  const numeroAlt = chance.age() ;
  numeroSecreto = numeroAlt;

   console.log('Hora de adivinar algun numero de 0 a 100');

  while (numeroSecreto != numeroElegido) {
    numeroElegido = elegirNum();
    verificarAdivinanza(numeroSecreto, numeroElegido);
 }  
} 

laAdivinanza();