export default function DashboardHeader() {
    const handleRelatorios = () => alert('Abrindo relatórios...')
    const handleNovaSolicitacao = () => alert('Criar nova solicitação')
  
    return (
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestão de Acessos</h1>
        <div className="space-x-2">
          <button onClick={handleRelatorios} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Relatórios
          </button>
          <button onClick={handleNovaSolicitacao} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Nova Solicitação
          </button>
        </div>
      </header>
    )
  }
  