import Image from "next/image"
export default function Projects ({project}){
    let github
    if(project.github.length>1){
        github = (
            <div className="flex space-x-5 mt-1">
                <a href={project.github[1]} target='_blank'>Backend Github</a>
                <p> | </p>
                <a href={project.github[0]} target='_blank'>Frontend Github</a>
            </div>
        )
    }else{
        github= (
            <div className="mt-1">
              <a href={project.github[0]} target='_blank'>Github</a>  
            </div>
        )
    }
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
                            <div className="mt-1">
                                <p className="border-b">Technologies:</p>
                                <p>{technologies}</p>
                            </div>
                            <br></br>
                            <div>
                                <p className="border-b">Description:</p>
                                <p>{project.description}</p>
                            </div>
                            <div className="mt-2">
                                <p className="border-b">Links: </p>
                                <div>
                                    {github}
                                    <div className="flex space-x-5 mt-1">
                                        <a href={project.demo} target='_blank'>Demo</a>
                                        <p>Email: demo@account | Password: demo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}