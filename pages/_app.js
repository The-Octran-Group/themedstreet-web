import { ThemeProvider } from 'next-themes'

import '../styles/globals.css'
import Navbar from '../components/global/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
        <Navbar />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}
