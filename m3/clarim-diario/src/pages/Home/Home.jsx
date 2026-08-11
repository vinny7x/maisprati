import NewsCard from '../../components/NewsCard/NewsCard';
import { useState, useEffect } from 'react';
import { listarNoticias } from '../../services/noticias';
import './Home.css';

function Home() {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchNoticias() {
            try {
                const data = await listarNoticias();
                setNoticias(data);
            } catch (e) {
                console.error(e);
                setError("Não foi possível carregar as notícias");
            } finally {
                setLoading(false);
            }
        }

        fetchNoticias();
    }, []);

    if (loading) return <p className='aviso-tela'>Carregando a edição...</p>;
    if (error) return <p className='aviso-tela'>{error}</p>;

    const [manchete, ...demais] = noticias;

    return (
        <main className='container'>
            <section className='manchete'>
                <NewsCard
                    id={manchete.id}
                    categoria={manchete.categoria}
                    resumo={manchete.resumo}
                    titulo={manchete.titulo}
                />
            </section>

            <section className='grade'>
                {demais.map(noticia => (
                    <NewsCard
                        key={noticia.id}
                        id={noticia.id}
                        categoria={noticia.categoria}
                        resumo={noticia.resumo}
                        titulo={noticia.titulo}
                    />
                ))}
            </section>

        </main>
    );
}
export default Home;