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
      </Head>
      <div>
        <About/>
        <div>
          <div className='text-center text-3xl font-medium mt-10 underline '>Skills</div>
          <TechStack/>
          <div>
            <div className='text-center text-3xl font-medium mt-10 underline' >Projects</div>
            <Projects project={typingTestApp}/>
            <Projects project={musicApp}/>
            <Projects project={chatApp}/>
            <Projects project={tag}/>
          </div>
          </div>
          <div className='mt-10'>
            <Contact/>  
          </div>
      </div>
    </div>
  )
}
