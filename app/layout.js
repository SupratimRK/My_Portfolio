import './globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}