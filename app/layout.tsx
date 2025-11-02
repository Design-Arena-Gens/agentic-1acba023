import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxe Nails - Premium Manicure Products',
  description: 'Discover luxurious manicure products for the perfect nail care experience',
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
