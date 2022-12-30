import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import withDarkMode from 'next-dark-mode'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute='class'>
    <Navbar />
    <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
