import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '#BoraCodar - Poveii',
  description: 'Desafios semanais da Rocketseat praticados pelo Poveii.',
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
