import NavBar from './components/nav-bar'
import './globals.css'

export const metadata = {
  title: 'Next.js + TypeScript Example',
  description: 'created next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
