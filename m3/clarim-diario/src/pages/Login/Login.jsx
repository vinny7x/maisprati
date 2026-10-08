import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [aviso, setAviso] = useState('');

    const { login, loginComGoogle } = useAuth();


    const navigate = useNavigate();

    async function enviar(e) {
        e.preventDefault();
        try {
            await login(email, senha);
            navigate('/');
        } catch (e) {
            setAviso(e.message);
        }
    }

    async function loginGoogleHandler(credential) {
        try {
            await loginComGoogle(credential);
            navigate('/');
        } catch (e) {
            setAviso(e.response?.data?.erro ?? "Não foi possível fazer login com o Google.");
        }
    }

    return (
        <main className="container">
            <form className="formulario" onSubmit={enviar}>
                <h1>Entrar no Clarim</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />

                {aviso && <p className="aviso">{aviso}</p>}
                <button type="submit">Entrar</button>
                <p className="rodape-form">
                    Ainda não é assinante? <Link to="/cadastro">Assine o Clarim</Link>
                </p>
                <GoogleLogin
                    onSuccess={response => loginGoogleHandler(response.credential)}
                    onError={(e) => { setAviso("Não foi possível fazer login com o Google."); console.log(e); }}
                />
            </form>

        </main>
    );
}

export default Login;