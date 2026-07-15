import Header from './components/Header/Header';
import NewsCard from './components/NewsCard/NewsCard';
import { noticias } from './data/noticias';
import './App.css'

function App() {
  const [manchete, ...demais] = noticias;
  return (
    <>
      <Header />
      <main className='container'>
        <section className='manchete'>
          <NewsCard
            categoria={manchete.categoria}
            resumo={manchete.resumo}
            titulo={manchete.titulo}
          />
        </section>

        <section className='grade'>
          {demais.map(noticia => (
            <NewsCard
              key={noticia.id}
              categoria={noticia.categoria}
              resumo={noticia.resumo}
              titulo={noticia.titulo}
            />
          ))}
        </section>

      </main>
    </>
  );
}

export default App;
