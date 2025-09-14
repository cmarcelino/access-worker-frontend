export default function SolicitacaoCard({ nome, etapa, status, data }) {
    const statusColor = status === 'Concluído' ? 'bg-green-600' : 'bg-yellow-500'
  
    return (
      <div className="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <p className="font-bold text-gray-800">{nome}</p>
          <p className="text-gray-600">Etapa Atual: {etapa}</p>
          <p className="text-sm text-gray-500">Data: {data}</p>
        </div>
        <span className={`px-3 py-1 rounded text-white text-sm ${statusColor}`}>
          {status}
        </span>
      </div>
    )
  }
  