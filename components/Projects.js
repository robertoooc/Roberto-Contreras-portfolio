import Image from "next/image";
export default function Projects({ project }) {
  let buttons = project.buttons.map((button) => {
    return (
      <div
        className="flex space-x-5 mt-1"
        key={`button${project.buttons.indexOf(button)}`}
      >
        <a
          href={button.link}
          target="_blank"
          className="bg-zinc-800 text-white rounded-lg p-2 text-center"
        >
          {button.name}
        </a>
      </div>
    );
  });
  let technologies = "";
  project.technologies.forEach((tech) => (technologies += ` ${tech} |`));
  return (
    <div className="mx-5 p-5 mb-5 text-lg">
      <h1 className="text-3xl font-medium">{project.name}</h1>
      <div className="xl:flex">
        <div className="">
          <Image src={project.webp} alt={project.name} />
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
            <div className="flex space-x-5">{buttons}</div>
            {project.demoAccount ? (
              <p className="place-self-center mt-3">
                Email: demo@account | Password: demo
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
