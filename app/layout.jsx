import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mayokun Adeniyi',
  description: 'Mayokun Adeniyi Portfolio and CV. A humble, resourceful, inspiring and motivational graduate architect who has a commercial approach to creative design and a high degree of professional competence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins bg-primary-color">{children}</body>
    </html>
  )
}
