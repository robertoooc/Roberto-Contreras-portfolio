import {VscGithubInverted} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail,MdPhoneIphone} from 'react-icons/md'

export default function Contact(){
    return(
        <div> {console.log('plz hire me 🙏')}
            <div className='text-center text-3xl font-medium'>Get in Touch</div>
            <div className='mb-5'>
                 <p className='text-center w-3/4 sm:w-1/2 mx-auto' >Please feel free to reach out to me if you have any questions or would like to hear more about my projects. I am easily reachable at all of the links posted below. Lets work talk!</p>
                <div className='border-2 mx-auto w-fit'>
                <a className='flex mx-3' href='mailto:robertocontrerasdev@gmail.com' target='_blank'>
                    <MdOutlineMail size={15} className='place-self-center'/>
                    <p className='place-self-center indent-1'>robertocontrerasdev@gmail.com</p>
                </a>
                </div>
            </div>

            <div className="flex justify-center space-x-5 bg-slate-500">

                <a href='https://github.com/robertoooc' target='_blank'><VscGithubInverted size={25} className='place-self-center'/></a>

                <a href='https://www.linkedin.com/in/roberto-contreras-882737241/' target='_blank'><BsLinkedin size={25} className='place-self-center'/></a>

                <a href='tel:424-571-0636'><MdPhoneIphone size={25} className='place-self-center'/></a>
            </div>
        </div>
    )
}