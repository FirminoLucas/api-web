//unica variavel global
const calcular = document.getElementById('calcular');

//funcao para calcular imc
function imc1 () {
    const nome = document.getElementeById('nome').value;
    const altura = document.getElementeById( 'altura').value;
    const peso = document.getElementeById('peso').value;
    const resultado = document.getElementById('resultado');

// validacao de campos
    if (nome !=='' && altura !== '' && peso !== ''){
// calculo do imc
        const IMC = (peso / (altura * altura) ).toFixed(1);
// criando classificacao
        let clasifica = ''; 

        if (IMC < 18.5){
            clasifica = 'abaixo do peso';
        }else if (IMC < 25){
            clasifica = 'peso ideal';
        }else if (IMC < 30) {
            clasifica = 'acima do peso';
        }else if (IMC < 35){
            clasifica = 'obesidade grau 1';
        }else if (IMC < 40){
            clasifica = 'obesidade grau 2';
        }else{
            clasifica = 'obesidade mórbida';
        }
// saida do resultado para o front
        resultado.textContent = `${nome} seu IMC é ${IMC} e por isso seu estado é: ${clasifica}.`;
       // saida da validacao 
    }else {
        resultado.textContent = 'Valores não preenchidos, favor validar se todos os campos estão preenchidos.';
    }

}
// listener para ver o evento de click do botao
calcular.addEventListener('click', imc1);