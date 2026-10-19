import { Link } from 'react-router-dom'

function AssinaturaSucesso() {
  return (
    <main className="container">
      <h1>Pagamento recebido!</h1>
      <p>Sua assinatura será ativada em instantes. Obrigado por apoiar o jornalismo do Clarim.</p>
      <Link to="/">Voltar à capa</Link>
    </main>
  )
}

export default AssinaturaSucesso