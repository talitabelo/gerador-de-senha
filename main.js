const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');
let tamanhoSenha = 12; // Inicialize o tamanho da senha aqui
numeroSenha.textContent = tamanhoSenha; // Defina o texto inicial

console.log(botoes);

botoes[0].onclick = diminuiTamanho; // Atribua a função ao evento onclick


function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha-1;
    }
    numeroSenha.textContent = tamanhoSenha;
}

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}