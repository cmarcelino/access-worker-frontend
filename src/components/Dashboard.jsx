import MetricCard from './MetricCard'
import StatusCard from './StatusCard'
import SolicitacaoCard from './SolicitacaoCard'
import { dashboardData } from '../data/dashboardMock'

export default function Dashboard() {
  const {
    totalSolicitacoes,
    leadTimeMedio,
    taxaAprovacao,
    reprovacoesUnicas,
    statusFluxo,
    solicitacoesRecentes,
  } = dashboardData

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho azul com botões brancos */}
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">Gestão de Acessos</h1>
        <div className="space-x-2">
          <button
            onClick={() => alert('Abrindo relatórios...')}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 font-semibold"
          >
            Relatórios
          </button>
          <button
            onClick={() => alert('Criar nova solicitação')}
            className="bg-white text-green-600 px-4 py-2 rounded hover:bg-green-100 font-semibold"
          >
            Nova Solicitação
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="p-6">
        {/* Métricas principais */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <MetricCard title="Solicitações de Acesso" value={totalSolicitacoes} />
          <MetricCard title="Lead Time Médio" value={leadTimeMedio} />
          <MetricCard title="Taxa de Aprovação" value={taxaAprovacao} />
          <MetricCard title="Reprovações Únicas" value={reprovacoesUnicas} />
        </section>

        {/* Status do fluxo */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Status do Fluxo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {statusFluxo.map((item, idx) => (
              <StatusCard key={idx} {...item} />
            ))}
          </div>
        </section>

        {/* Solicitações recentes */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Solicitações Recentes</h2>
          <div className="space-y-4">
            {solicitacoesRecentes.map((s, idx) => (
              <SolicitacaoCard key={idx} {...s} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
