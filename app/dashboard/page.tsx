'use client'

export default function Home() {
  const metrics = [
    { label: 'Total Users', value: '1,234', change: '+12%' },
    { label: 'Revenue', value: '$45,678', change: '+8%' },
    { label: 'Active Sessions', value: '567', change: '+23%' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.5%' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">dashboard</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
              <p className="text-3xl font-bold">{metric.value}</p>
              <p className="text-green-600 text-sm mt-2">{metric.change}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Analytics Chart</h3>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart visualization would go here</p>
          </div>
        </div>
      </main>
    </div>
  )
}
