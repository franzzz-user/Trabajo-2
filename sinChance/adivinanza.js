const generarNumAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) {
    console.log('Adivinaste el numero :O');
  } else if (numeroAdivinado > numeroSecreto) {
    console.log('El numero secreto es menor');
 } else {
   console.log('El numero secreto es mayor');
 }
};


module.exports = {
    generarNumAleatorio,
     verificarAdivinanza
}