import { Link } from 'react-router-dom'

function AssinaturaCancelada() {
  return (
    <main className="container">
      <h1>Pagamento não concluído</h1>
      <p>Nenhuma cobrança foi feita. Você pode tentar de novo quando quiser.</p>
      <Link to="/assinar">Ver os planos</Link>
    </main>
  )
}

export default AssinaturaCancelada