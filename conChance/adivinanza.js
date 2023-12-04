const verificarAdivinanza = (numeroAlt, numeroElegido) => {
    if (numeroElegido == numeroAlt) {
        console.log('Le ganaste a la probabilidad, acertaste el numero!!');
    } else if (numeroElegido > numeroAlt) {
        console.log('El numero que elegiste es alto, habra que restarle un poco');
    } else {
        console.log('El numero que elegiste es bajo, capaz si le aumentamos un poco');
    }
}

module.exports = {
    verificarAdivinanza
}