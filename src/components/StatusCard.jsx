export default function StatusCard({ etapa, descricao, quantidade }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold text-gray-800">{etapa}</h3>
        <p className="text-gray-600">{descricao}</p>
        <span className="text-sm text-gray-500">Quantidade: {quantidade}</span>
      </div>
    )
  }
  