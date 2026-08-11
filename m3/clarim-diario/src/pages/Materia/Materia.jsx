import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { buscarNoticia } from '../../services/noticias';
import './Materia.css';
function Materia() {
    const { id } = useParams();

    const [noticia, setNoticia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchNoticia() {
            try {
                setLoading(true);
                setError('');
                const data = await buscarNoticia(id);
                setNoticia(data);
            } catch {
                setError("Não foi possível carregar a matéria");
            } finally {
                setLoading(false);
            }
        }

        fetchNoticia();
    }, [id]);


    if (loading) return <p className='aviso-tela'>Carregando a matéria...</p>;
    if (error) {
        return (
            <main className='container materia'>
                <p className='aviso-tela'>{error}</p>
            </main>
        );
    }
    return (
        <main className='container materia'>
            <Link to='/' className='materia__voltar'>Voltar à capa</Link>
            <span className='materia__categoria'>{noticia.categoria}</span>
            <h1>{noticia.titulo}</h1>
            <p className="materia__resumo">{noticia.resumo}</p>
            <div className="materia__texto">
                <p>{noticia.texto}</p>
            </div>
        </main>
    );
}
export default Materia;