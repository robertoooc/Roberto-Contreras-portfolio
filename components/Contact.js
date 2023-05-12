import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail, MdPhoneIphone } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";

export default function Contact() {
  return (
    <div>
      {" "}
      {console.log("plz hire me 🙏")}
      <div className="text-center text-3xl font-medium underline" id="contact">
        Get in Touch
      </div>
      <div className="mb-5 text-lg">
        <p className="text-center w-3/4 sm:w-1/2 mx-auto">
          Please feel free to reach out to me if you have any questions or would
          like to hear more about my projects. I am easily reachable at all of
          the links posted below. Lets talk!
        </p>
        <div className="mx-auto w-fit bg-white rounded-md mt-5">
          <a
            className="flex mx-3"
            href="mailto:robertocontrerasdev@gmail.com"
            target="_blank"
          >
            <MdOutlineMail size={15} className="place-self-center" />
            <p className="place-self-center indent-1">
              robertocontrerasdev@gmail.com
            </p>
          </a>
        </div>
        <div className="mx-auto w-fit bg-white rounded-md mt-5">
          <a
            className="flex mx-3"
            href="/RobertoContrerasResume.pdf"
            target="_blank"
          >
            <GrDocumentPdf size={15} className="place-self-center" />
            <p className="place-self-center indent-1">Resume</p>
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-5 bg-[rgb(32,32,32)] mt-10">
        <a
          href="https://github.com/robertoooc"
          target="_blank"
          className="bg-white rounded-full my-5"
        >
          <VscGithubInverted size={25} className="place-self-center m-2" />
        </a>

        <a
          href="https://www.linkedin.com/in/roberto-contreras-882737241/"
          target="_blank"
          className="bg-white rounded-full my-5"
        >
          <BsLinkedin size={25} className="place-self-center m-2" />
        </a>

        <a
          href="mailto:robertocontrerasdev@gmail.com"
          target="_blank"
          className="bg-white rounded-full my-5"
        >
          <MdOutlineMail size={25} className="place-self-center m-2" />
        </a>
      </div>
    </div>
  );
}
