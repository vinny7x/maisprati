import { createContext, useContext, useState } from 'react';
import { login as loginService, loginGoogle } from '../services/auth.js';
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(() => {
        const salvo = localStorage.getItem('usuario');
        return salvo ? JSON.parse(salvo) : null;
    });
    async function login(email, senha) {
        const dados = await loginService(email, senha);

        localStorage.setItem('token', dados.token);
        localStorage.setItem('usuario', JSON.stringify({ nome: dados.nome, papel: dados.papel }));
        setUsuario(dados);
    }

    function iniciarSessao(dados) {
        localStorage.setItem('token', dados.token);
        const resumo = { nome: dados.nome, papel: dados.papel };
        localStorage.setItem('usuario', JSON.stringify(resumo));
        setUsuario(resumo);
    }

    async function loginComGoogle(credencial) {
        const dados = await loginGoogle(credencial);

        iniciarSessao(dados);
    }

    function logout() {
        setUsuario(null);
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
    }
    return (
        <AuthContext.Provider value={{ usuario, login, logout, loginComGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const contexto = useContext(AuthContext);
    if (!contexto) {
        throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
    }
    return contexto;
}