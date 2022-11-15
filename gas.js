var gas = prompt("Gás?");
var km = prompt("Km?"); 
gas = parseInt(gas);
 km = parseInt(km); 
 abastecimento(); 
 function abastecimento()
 { 
 pr = gas/km; 
 document.write(pr+" de "); 
 document.write("Km rodadao") 
 }
