import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const salvo = localStorage.getItem('theme');
    if (salvo) return salvo;

    const preferenciaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;;
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
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
