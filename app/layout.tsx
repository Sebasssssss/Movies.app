import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=outfit@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0c0c] text-white">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
