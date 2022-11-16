var temperatura = prompt('Temperatura');
temperatura = parseFloat(temperatura);
if (temperatura >38){
    console.log('Você está com febre');
    document.write('Você está com febre');
} else {
    console.log('Nada de febre');
    document.write('Nada de febre');
}