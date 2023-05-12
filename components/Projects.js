import Image from "next/image";
export default function Projects({ project }) {
  let github;
  if (project.github.length > 1) {
    github = (
      <div className="">
        <div className="flex space-x-5 mt-1">
          <a
            href={project.github[1]}
            target="_blank"
            className="bg-zinc-800 text-white rounded-lg p-2 text-center"
          >
            Backend Github
          </a>
          <a
            href={project.github[0]}
            target="_blank"
            className="bg-zinc-800 text-white rounded-lg p-2 text-center"
          >
            Frontend Github
          </a>
        </div>
        <div className="flex space-x-5 mt-1">
          <a
            href={project.demo}
            target="_blank"
            className="bg-zinc-800 text-white rounded-lg p-2"
          >
            Demo
          </a>
          <p className="place-self-center">
            Email: demo@account | Password: demo
          </p>
        </div>
      </div>
    );
  } else {
    github = (
      <div className="mt-2">
        <a
          href={project.github[0]}
          target="_blank"
          className="bg-zinc-800 text-white rounded-lg p-2"
        >
          Github
        </a>
        <div className="flex space-x-5 mt-2">
          <a
            href={project.demo}
            target="_blank"
            className="bg-zinc-800 text-white rounded-lg p-2 "
          >
            Demo
          </a>
          <p className="place-self-center">
            Email: demo@account | Password: demo
          </p>
        </div>
      </div>
    );
  }
  let technologies = "";
  project.technologies.forEach((tech) => (technologies += ` ${tech} |`));
  return (
    <div className="mx-5 p-5 mb-5 text-lg">
      <h1 className="text-xl font-medium">{project.name}</h1>
      <div className="sm:flex">
        <div className="w-fit sm:w-8/12">
          <Image src={project.img} alt={project.name} />
        </div>
        <div className="sm:mx-5">
          <div className="mt-1">
            <p className="border-b border-black font-medium">Technologies:</p>
            <p>{technologies}</p>
          </div>
          <br></br>
          <div>
            <p className="border-b border-black font-medium">Description:</p>
            <p>{project.description}</p>
          </div>
          <div className="mt-2">
            <p className="border-b border-black font-medium">Links: </p>
            <div>{github}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
