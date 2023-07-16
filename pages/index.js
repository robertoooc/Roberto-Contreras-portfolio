import Head from "next/head";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { typingTestApp, musicApp, chatApp, tag } from "@/constants/constants";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Roberto Contreras's Portfolio</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Roberto Contreras's Portfolio" />
        <meta name="author" content="Roberto Contreras" />

      </Head>
      <div>
        <About />
        <div>
          <div className="text-center text-3xl font-medium mt-10 underline ">
            Skills
          </div>
          <TechStack />
          <div>
            <div className="text-center text-3xl font-medium mt-10 underline">
              Projects
            </div>
            <Projects project={typingTestApp} />
            <Projects project={musicApp} />
            <Projects project={chatApp} />
            <Projects project={tag} />
          </div>
        </div>
        <div className="mt-10">
          <Contact />
        </div>
      </div>
    </div>
  );
}
