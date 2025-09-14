export default function MetricCard({ title, value }) {
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{value}</p>
      </div>
    )
  }
  