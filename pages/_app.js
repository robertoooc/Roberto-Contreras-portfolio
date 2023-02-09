import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* navbar above */}
    <Navbar/>
    <Component {...pageProps} />
    {/* footer below */}
    </>
  )
}
