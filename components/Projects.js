import Image from "next/image"
import typingTestApp from '../public/imgs/TypingTestApp.png'
// import chatApp from '../public/imgs/chatApp.png'
// import tag from '../public/imgs/tag.png'
// import musicApp from '../public/imgs/musicApp.png'
export default function Projects ({project}){
    let technologies=''
    project.technologies.forEach((tech)=> technologies+= ` ${tech} |`)
    return(
                <div className="mx-5 border p-5 mb-5">
                    <h1 className="text-xl font-medium">{project.name}</h1>
                    <div className="sm:flex">
                        <div className="w-fit sm:w-8/12">
                            <Image 
                                src={project.img}
                                alt={project.name}
                            />
                        </div>
                        <div className="sm:mx-5">
                            <div>
                                <p>Technologies:</p>
                                <p>{technologies}</p>
                            </div>
                            <br></br>
                            <div>
                                <p>Description:</p>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <p>Links: </p>
                                <div className='flex justify-center'>
                                    <div>
                                        <button onClick={()=>window.open(`${project.demo}`, "_blank")}>Demo</button>
                                        <p>Email: demo@account</p>
                                        <p className='text-center'>Password: demo</p>
                                    </div>
                                    <div>
                                        <button onClick={()=>window.open(`${project.github}`, "_blank")}>Github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}