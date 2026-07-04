const CHAVE_USUARIOS = "usuarios";
const CHAVE_SESSAO = "usuarioLogado";

function lerUsuarios() {
    const json = localStorage.getItem(CHAVE_USUARIOS);
    return json ? JSON.parse(json) : [];
}

export function registrar(usuario) {
    const usuarios = lerUsuarios();

    if (usuarios.some(u => u.email === usuario.email)) {
        throw new Error("Este E-mail já existe!");
    }
    usuarios.push(usuario);
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios));

}

export function login(email, senha) {
    const usuarios = lerUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
        throw new Error("E-mail ou senha incorreto");
    }
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify({ email: usuario.email }));
    return usuario;
}