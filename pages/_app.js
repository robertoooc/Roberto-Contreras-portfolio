import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
    {/* navbar above */}
    <Navbar/>
    <Component {...pageProps} />
    {/* footer below */}
    </div>
  )
}
