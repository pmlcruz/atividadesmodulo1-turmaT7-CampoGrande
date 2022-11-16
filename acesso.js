var idade = prompt('idade:');
idade = parseInt(idade);
document.write('Idade:' + idade + '<br>');
if (idade>=18) {
    document.write('Acesso permitido');
} else {
    document.write('Acesso negado');
}