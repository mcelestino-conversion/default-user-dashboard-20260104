'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">home</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-gray-700 mb-4">Welcome to the home page. This page provides detailed information and functionality related to home.</p>
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-2xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Comprehensive information display</li>
                <li>Interactive user interface</li>
                <li>Responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
