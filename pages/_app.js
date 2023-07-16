import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-[rgb(228,221,197)]'>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  )
}
