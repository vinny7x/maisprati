import { useEffect, useState } from 'react';
import { listarPlanos, iniciarCheckout } from '../../services/assinatura';

function Assinar() {
    const [planos, setPlanos] = useState([]);
    const [aviso, setAviso] = useState('');

    const [redirecionando, setRedirecionando] = useState(false);

    useEffect(() => {
        listarPlanos()
            .then(setPlanos)
            .catch(() => setAviso('Não foi possível carregar os planos.'));
    }, []);

    async function assinar(planoId) {
        setRedirecionando(true);
        try {

            const url = await iniciarCheckout(planoId);
            window.location.href = url;
        } catch (erro) {
            setAviso(erro.response?.data?.mensagem ?? 'Não foi possível iniciar o pagamento.');
            setRedirecionando(false);
        }
    }

    return (
        <main className="container">
            <h1>Assine o Clarim</h1>
            {aviso && <p className="aviso">{aviso}</p>}
            {planos.map((plano) => (
                <article key={plano.id} className="card">
                    <h3>{plano.nome}</h3>
                    <p>{plano.precoFormatado} / {plano.intervalo === 'MONTH' ? 'mês' : 'ano'}</p>
                    <button disabled={redirecionando} onClick={() => assinar(plano.id)}>
                        {redirecionando ? 'Abrindo o pagamento…' : 'Assinar'}
                    </button>
                </article>
            ))}
        </main>
    );
}

export default Assinar;