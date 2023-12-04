const readlinesync = require('readline-sync');
const { generarNumAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlinesync.question('Ingresar un numero del 1 al 100 : ')
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumAleatorio();
    let numeroAdivinado = 0;

 console.log('Hora de adivinar');

 while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
 }
};

juegoAdivinanza();