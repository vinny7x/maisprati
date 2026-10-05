import api  from "./api";

export async function login(email, senha) {
    const {data} = await api.post('/api/auth/login', {email, senha});
    return data
}

// function logout() {
//     localStorage.removeItem('usuario');
//     localStorage.removeItem('token');
//     setUsuario(null);
// }

// export {logout}

export async function cadastrar(nome, email, senha) {
    const {data} = await api.post('/api/usuarios', {nome, email, senha});
    return data
}