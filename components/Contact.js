import {VscGithubInverted} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
export default function Contact(){
    return(
        <div>
            <div className='text-center text-3xl font-medium'>Get in Touch</div>
            <div className="flex justify-center space-x-5">
                <div className='bg-sky-700 rounded-full w-14 h-14 grid'><VscGithubInverted size={35} className='place-self-center'/></div>
                <div className='bg-sky-700 rounded-full w-14 h-14 grid'><BsLinkedin size={35} className='place-self-center'/></div>
                <div className='bg-sky-700 rounded-full w-14 h-14 grid'><MdOutlineMail size={35} className='place-self-center'/></div>
            </div>
        </div>
    )
}