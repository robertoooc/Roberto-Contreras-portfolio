import {VscGithubInverted} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
export default function Contact(){
    return(
        <div>
            <div className='text-center text-3xl font-medium'>Get in Touch</div>
            <div className="flex justify-center space-x-5">
                <div className='bg-sky-700 rounded-full w-14 h-14 grid' onClick={()=>window.open("https://github.com/robertoooc")}><VscGithubInverted size={35} className='place-self-center'/></div>
                <div className='bg-sky-700 rounded-full w-14 h-14 grid' onClick={()=>window.open("https://www.linkedin.com/in/roberto-contreras-882737241/")}><BsLinkedin size={35} className='place-self-center'/></div>
                <div className='bg-sky-700 rounded-full w-14 h-14 grid' onClick={()=>window.location="mailto:robertooo.c48@gmail.com"}><MdOutlineMail size={35} className='place-self-center'/></div>
            </div>
        </div>
    )
}