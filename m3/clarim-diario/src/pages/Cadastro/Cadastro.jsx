import { useState } from 'react';
import { buscarCep } from '../../services/viacep';
import { cadastrar } from '../../services/auth.js';
import { useNavigate } from 'react-router-dom';
function Cadastro() {
    const [form, setForm] = useState({
        nome: '', email: '', senha: '', cep: '',
        logradouro: '', numero: '', bairro: '', cidade: '', uf: '',
    });
    const navigate = useNavigate();
    const [aviso, setAviso] = useState('');

    function atualizarCampo(e) {
        const { id, value } = e.target;

        setForm(f => ({ ...f, [id]: value }));
    }


    async function preencherEndereco() {
        if (!form.cep) return;
        try {
            setAviso('Buscando CEP…');
            const end = await buscarCep(form.cep);
            setForm(f => ({
                ...f,
                logradouro: end.logradouro,
                bairro: end.bairro,
                cidade: end.localidade,
                uf: end.uf,
            }));
            setAviso('');
        } catch (erro) {
            setAviso(erro.message);
        }
    }

    async function enviar(e) {
        e.preventDefault();
        try {
            await cadastrar(form.nome, form.email, form.senha);
            navigate('/login');
        } catch (erro) {
            setAviso(erro.message);
        }
    }

    return (
        <main className="container">
            <form className="formulario" onSubmit={enviar}>
                <h1>Assine o Clarim</h1>

                <label htmlFor="nome">Nome completo</label>

                <input id="nome" value={form.nome} onChange={atualizarCampo} required />

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" value={form.email} onChange={atualizarCampo} required />
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" value={form.senha} onChange={atualizarCampo} minLength={8} required />

                <label htmlFor="cep">CEP</label>
                <input id="cep" value={form.cep} onChange={atualizarCampo}
                    onBlur={preencherEndereco} placeholder="00000-000" required />

                <label htmlFor="logradouro">Rua</label>
                <input id="logradouro" value={form.logradouro} onChange={atualizarCampo} />

                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" value={form.bairro} onChange={atualizarCampo} />

                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" value={form.cidade} onChange={atualizarCampo} />

                <label htmlFor="uf">UF</label>
                <input id="uf" value={form.uf} onChange={atualizarCampo} maxLength={2} />

                {aviso && <p className="aviso">{aviso}</p>}

                <button type="submit">Assinar</button>
            </form>
        </main>
    );
}

export default Cadastro;