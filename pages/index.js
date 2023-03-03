import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import About from '@/components/About'
import Projects from '@/components/Projects'
// import About from '../components/About'
// import styles from '@/styles/Home.module.css'
import { typingTestApp,musicApp,chatApp,tag } from '@/constants/constants'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roberto Contreras's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className=''>
        <About/>
        <div>
          <div className='text-center text-3xl font-medium'>Tech Stack</div>
          <TechStack/>
          <div className='text-center text-3xl font-medium'>Projects</div>
          <Projects project={typingTestApp}/>
          <Projects project={musicApp}/>
          <Projects project={chatApp}/>
          <Projects project={tag}/>
        </div>
        <Contact/>  
      </div>
    </div>
  )
}
