import Image from "next/image"
import Timeline from "./Timeline"
const About  = ()=>{
return(
    <div className="sm:mt-20 mt-6">
        <div className='text-center text-3xl font-medium pt-12 '>About</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-fr ">
            <div className="flex justify-center sm:justify-end h-fit">
                <div>
                    <Image src='/imgs/portfolioPicture.png' alt="me" width="180" height="180" style={{borderRadius:'100px'}} className='mx-auto'/>
                    <p className="mx-5 text-lg">
                        As a highly motivated and coachable full stack developer, I am looking forward to continuing to develop my overall abilities wherever my career takes me. With the soft skills I have developed through my time working in the food industry coupled with my growing technical skills, I am able to effectively communicate with coworkers, stay focused in the face of increasing deadline pressure, and most importantly, increase production speed.
                    </p>
                </div>
            </div>
            <div style={{backgroundColor:'rgb(32,32,32)',color:"white"}} className='h-fit sm:my-auto mt-5 mx-10 rounded-lg font-thin tracking-wide'>
                <div className="flex my-5 space-x-5 h-fit ">
                    <div className="border-r-2 pr-1 ">
                        <p className="indent-5 ">1</p>
                        <p className="indent-5 ">2</p>
                        <p className="indent-5 ">3</p>
                        <p className="indent-5 ">4</p>
                        <p className="indent-5 ">5</p>
                        <p className="indent-5 ">6</p>
                        <p className="indent-5 ">7</p>
                        <p className="indent-5 ">8</p>
                        <p className="indent-5 ">9</p>
                        <p className="indent-5 ">10</p>
                        <p className="indent-5 ">11</p>
                        <p className="indent-5 ">12</p>
                    </div>

                    <div className="h-fit">
                        <p>{`{`}</p>
                        <div className="indent-5 border-l border-dotted">
                             
                                <p className="indent-5" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"name" : <span style={{color:'rgb(220,150,104)'}}>"Roberto Contreras"</span>,</p>
                                <p className="indent-5" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"role" : <span style={{color:'rgb(220,150,104)'}}>"Software Engineer"</span>,</p>
                                <p className="indent-5" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"location" : <span style={{color:'rgb(220,150,104)'}}>"Los Angeles, CA"</span>,</p>
                                <p className="indent-5" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"open" : <span style={{color:'rgb(220,150,104)'}}>"Resume"</span>,</p>
                                <p className="indent-5" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"hobbies" : <span className="text-white">[</span></p>
                                <div className="text-[rgb(220,150,104)] indent-10">
                                <p>"rock climbing"<span className="text-white">,</span></p>
                                <p>"cooking"<span className="text-white">,</span></p>
                                <p>"exploring new music"<span className="text-white">,</span></p>
                                <p>"tinkering with arduions"<span className="text-white">,</span></p>
                                </div>
                                <p>],</p>
                            
                        </div>
                        <p>{`}`}</p>
                        {/* <p>{`more : {`}</p>
                        <p className="indent-5 border-l border-dotted" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"resume" : <span style={{color:'rgb(220,150,104)'}}>"Roberto Contreras"</span>,</p>
                        <p className="indent-5 border-l border-dotted" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"role" : <span style={{color:'rgb(220,150,104)'}}>"Software Engineer"</span>,</p>
                        <p className="indent-5 border-l border-dotted" style={{color:'rgb(123,174,212)',borderColor:'white'}}>"location" : <span style={{color:'rgb(220,150,104)'}}>"Los Angeles, CA"</span>,</p>
                        <p>{`},`}</p> */}
                    </div>
                </div>

            </div>
        </div>
            <Timeline/>
    </div>
)
}
export default About