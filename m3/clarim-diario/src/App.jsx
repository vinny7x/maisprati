import Header from './components/Header/Header';
import NewsCard from './components/NewsCard/NewsCard';
import { noticias } from './data/noticias';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [manchete, ...demais] = noticias;
  const [theme, setTheme] = useState(() => {
    const salvo = localStorage.getItem('theme');
    if (salvo) return salvo;

    const preferenciaEscuro = window.matchMedia('(preferes-color-scheme: dark)').matches;
    if (preferenciaEscuro) return 'dark';
    return 'light';
  });

  function handleTheme() {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <Header theme={theme} handleTheme={handleTheme} />
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
