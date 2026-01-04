import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'dashboard',
  description: 'a responsive next.js dashboard with charts, authentication, and user management features.',
  keywords: ['web', 'app'],
  authors: [{ name: 'DUDE X Builder' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
