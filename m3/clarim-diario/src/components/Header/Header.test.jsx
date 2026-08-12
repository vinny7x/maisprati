import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import { AuthProvider } from '../../contexts/AuthContext';
import Header from './Header';

function renderizarHeader() {
    render(
        <MemoryRouter>
            <AuthProvider>
                <Header theme="light" handleTheme={() => { }} />
            </AuthProvider>
        </MemoryRouter>
    );
}
describe('Header', () => {
    beforeEach(() => localStorage.clear());

    it('mostra o link Entrar quando não há usuário logado', () => {
        renderizarHeader();
        expect(screen.getByText('Entrar')).toBeInTheDocument();
    });
    it('mostra a saudação quando há usuário logado', () => {
        localStorage.setItem('usuario', JSON.stringify({ nome: 'J. Jhonah Jameson' }));
        renderizarHeader();
        expect(screen.getByText(/J. Jhonah Jameson/)).toBeInTheDocument();
    });
});