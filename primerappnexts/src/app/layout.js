import NavBar from '@/components/Navbar'
import '../styles/globals.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
          
     
        <NavBar />
        {children}
       
      </body>
    </html>
  )
}
