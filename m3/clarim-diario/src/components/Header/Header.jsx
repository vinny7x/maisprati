import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

function Header({ theme, handleTheme }) {
    const { usuario, logout } = useAuth();
    const today = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });

    return (
        <header className="cabecalho">
            <div className="cabecalho__faixa">
                <span>Edição de Nova York</span>
                <span>{today}</span>
                {usuario ? (
                    <span className='cabecalho__sessao'>
                        Olá, {usuario.nome} 
                        <Link to='/painel'> Painel </Link>
                        <button className='cabecalho__sair' onClick={logout}>Sair</button>
                    </span>
                ) : (
                    <Link to='/login' className='cabecalho__entrar'>Entrar</Link>
                )}
                <button className='cabecalho__tema' onClick={handleTheme}>
                    {theme === 'light' ? 'escuro' : 'claro'}
                </button>
            </div>
            <h1 className="cabecalho__titulo">O CLARIM DIÁRIO</h1>
            <p className="cabecalho__lema">A verdade doa a quem doer - Inclusive a certos aracnídeos</p>
            <nav className="cabecalho__menu">
                <a href="#">Cidade</a>
                <a href="#">Ameaças Urbanas</a>
                <a href="#">Opnião do Editor</a>
                <a href="#">Esportes</a>
                <a href="#">Classificados</a>
            </nav>
        </header>
    );
}
export default Header;