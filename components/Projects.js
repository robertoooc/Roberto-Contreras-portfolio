import Image from "next/image"
import typingTestApp from '../public/imgs/TypingTestApp.png'
export default function Projects (){
    return(
        <div>
            <div>
                TechStack
            </div>
            <div>
                <div className="text-center text-3xl font-medium">
                    <h1>Projects</h1>
                </div>
                <div className="mx-5 border p-5">
                    <h1 className="text-xl font-medium">Typing Test App</h1>
                    <div className="sm:flex">
                        <div className="w-fit sm:w-8/12">
                            <Image 
                                src={typingTestApp}
                                alt='Typing Test App'
                            />
                        </div>
                        <div className="sm:mx-5">
                            <div>
                                MongoDb | React | Express.js | Node.js | Typescript
                            </div>
                            <div>
                                description
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}