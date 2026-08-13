const campoSenha = document.querySelector('#campo-senha');
const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');

const checkboxMaiusculo = document.querySelector('#maiusculo');
const checkboxMinusculo = document.querySelector('#minusculo');
const checkboxNumero = document.querySelector('#numero');
const checkboxSimbolo = document.querySelector('#simbolo');

const barraForca = document.querySelector('#barra-forca');
const entropia = document.querySelector('#entropia');

let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

// ==========================
// BOTÕES DE TAMANHO
// ==========================

botoes[0].addEventListener('click', diminuiTamanho);
botoes[1].addEventListener('click', aumentaTamanho);

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }
}

// ==========================
// GERAÇÃO DA SENHA
// ==========================

function geraSenha() {

    let caracteres = '';

    if (checkboxMaiusculo.checked) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (checkboxMinusculo.checked) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (checkboxNumero.checked) {
        caracteres += '0123456789';
    }

    if (checkboxSimbolo.checked) {
        caracteres += '!@#$%&*?';
    }

    // Se nenhum tipo estiver selecionado
    if (caracteres.length === 0) {
        campoSenha.value = '';
        barraForca.className = 'forca fraca';
        entropia.textContent = 'Selecione pelo menos uma característica.';
        return;
    }

    let senha = '';

    for (let i = 0; i < tamanhoSenha; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    campoSenha.value = senha;

    calculaForca(caracteres.length);
}

// ==========================
// FORÇA DA SENHA
// ==========================

function calculaForca(tamanhoCaracteres) {

    const valorEntropia =
        tamanhoSenha * Math.log2(tamanhoCaracteres);

    entropia.textContent =
        `Entropia: ${valorEntropia.toFixed(1)} bits`;

    barraForca.className = 'forca';

    if (valorEntropia < 50) {
        barraForca.classList.add('fraca');
    } else if (valorEntropia < 80) {
        barraForca.classList.add('media');
    } else {
        barraForca.classList.add('forte');
    }
}

// ==========================
// CHECKBOXES
// ==========================

checkboxMaiusculo.addEventListener('change', geraSenha);
checkboxMinusculo.addEventListener('change', geraSenha);
checkboxNumero.addEventListener('change', geraSenha);
checkboxSimbolo.addEventListener('change', geraSenha);

// ==========================
// GERA A SENHA AO ABRIR
// ==========================

geraSenha();