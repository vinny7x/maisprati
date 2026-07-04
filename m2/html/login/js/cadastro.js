import { registrar } from './autenticador.js';

const form = document.querySelector("#form-cadastro");
const aviso = document.querySelector('#aviso')
form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const usuario = { email, senha };

    try {
        registrar(usuario);
        alert("Cadastro relizado! Faça login para continuar");
        window.location.href = 'index.html';
    } catch (erro) {
        aviso.textContent = erro.message
    }
});