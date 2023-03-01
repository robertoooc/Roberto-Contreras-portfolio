import Image from "next/image"
import { useState } from "react"
import {BiPlus} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
const About  = ()=>{
    const [openTimeline,setOpenTimeline] = useState(false)
    let timeline 
    if(openTimeline){
        timeline = (
            <div>
                <div style={{backgroundColor:'gray'}}>
                <h1 className="text-center text-3xl font-medium ">Timeline</h1>
                <MdClose onClick={()=>setOpenTimeline(false)}/>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 auto-rows-fr">
                    <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                        <div className='text-center text-xl font-bold'>2018</div>
                        <div>Initial introduction into engineering through Vex Robotics, was able to compete in tournaments and my team even qualified and competed at a signature event hosted in one of the Google buildings in Sunnyvale, CA.</div>
                    </div>
                    <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                        <div className='text-center text-xl font-bold'>2020</div>
                        <div>The start of my 2 year journey in working in restaurants. Gained multiple experiences from it that not only helped me grow and mature as a person but also provided some usesful transferrable skills. </div>
                    </div>
                    <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                        <div className='text-center text-xl font-bold'>2021</div>
                        <div>Gained my first interaction to programming through taking Ap Computer Science. It helped further guide my decision into which engineering pathway I wanted to pursue.</div>
                    </div>
                    <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                        <div className='text-center text-xl font-bold'>2022</div>
                        <div>I took initiative in graduating High School a year early, ambitiously wanting to get started on pursuing a career.</div>
                    </div>
                    <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                        <div className='text-center text-xl font-bold'>2023</div>
                        <div>Graduated from General Assembly </div>
                    </div>  
                </div>
            </div>
        )
    }else{
        timeline=(
            <div className="mx-auto flex">
            <div style={{backgroundColor:'gray'}}>
                <h1 className="text-center text-3xl font-medium ">Timeline</h1>
            </div>
            <div className="justify-items"><BiPlus onClick={()=>setOpenTimeline(true)}/></div>
            </div>
        )
    }
return(
    <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr">
            <div className="flex justify-center sm:justify-end">
                <div>
                    <Image src='/imgs/portfolioPicture.png' alt="me" width="180" height="180" style={{borderRadius:'100px'}} className='mx-auto'/>
                    <p className="mx-5 ">
                        As a highly motivated and coachable full stack developer, I am looking forward to continuing to develop my overall abilities wherever my career takes me. With the soft skills I have developed through my time working in the food industry coupled with my growing technical skills, I am able to effectively communicate with coworkers, stay focused in the face of increasing deadline pressure, and most importantly, increase production speed. Aside from coding, I enjoy rock climbing and further improving my kitchen skills.
                    </p>
                </div>
            </div>
            <div style={{backgroundColor:'rgb(32,32,32)',color:"white"}} className='min-w-fit mx-10 rounded-lg font-thin tracking-wide'>
                <div className="flex mt-2 space-x-5">
                    <div className="border-r-2 pr-1 ">
                        <p className="indent-5 ">1</p>
                        <p className="indent-5 ">2</p>
                        <p className="indent-5 ">3</p>
                        <p className="indent-5 ">4</p>
                        <p className="indent-5 ">5</p>
                    </div>

                    <div>
                        <p>{`{`}</p>
                        <p className="indent-5 border-l border-dotted" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"name" : <span style={{color:'rgb(220,150,104)'}}>"Roberto Contreras"</span>,</p>
                        <p className="indent-5 border-l border-dotted" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"role" : <span style={{color:'rgb(220,150,104)'}}>"Software Engineer"</span>,</p>
                        <p className="indent-5 border-l border-dotted" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"location" : <span style={{color:'rgb(220,150,104)'}}>"Los Angeles, CA"</span>,</p>
                        <p>{`},`}</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="flex items-center p-3 space-x-5">
            <div>
                    <div>
                        <h1 className="text-center text-3xl font-medium ">Timeline</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 auto-rows-fr">
                        <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                            <div className='text-center text-xl font-bold'>2018</div>
                            <div>Initial introduction into engineering through Vex Robotics, was able to compete in tournaments and my team even qualified and competed at a signature event hosted in one of the Google buildings in Sunnyvale, CA.</div>
                        </div>
                        <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                            <div className='text-center text-xl font-bold'>2020</div>
                            <div>The start of my 2 year journey in working in restaurants. Gained multiple experiences from it that not only helped me grow and mature as a person but also provided some usesful transferrable skills. </div>
                        </div>
                        <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                            <div className='text-center text-xl font-bold'>2021</div>
                            <div>Gained my first interaction to programming through taking Ap Computer Science. It helped further guide my decision into which engineering pathway I wanted to pursue.</div>
                        </div>
                        <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                            <div className='text-center text-xl font-bold'>2022</div>
                            <div>I took initiative in graduating High School a year early, ambitiously wanting to get started on pursuing a career and enrolled into General Assembly's Software Engineering Immersive program.</div>
                        </div>
                        <div style={{backgroundColor:'gray'}} className='items-center p-2'>
                            <div className='text-center text-xl font-bold'>2023</div>
                            <div>Graduated from General Assembly </div>
                        </div>  
                    </div>
            </div>
            
        </div>

    </div>
)
}
export default About