'use client'

import Link from 'next/link'

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">Profile</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" defaultValue="John Doe" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Save Changes</button>
          </div>
        </div>
      </main>
    </div>
  )
}
