// import Link from next
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";
export default function Navbar(){
    const [nav,setNav]=useState(false)
    // const [showNav,setShowNav]
    // const changeNav=()=>{
    //     setNav(!nav)
    // }
    const mobileNav=(
        <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full bg-[rgb(32,32,32)] text-center ease-in duration-300 h-min">
            <ul>
                <li className="p-4 text-4xl hover:text hover:text-gray-500">
                    <Link href='/' scrollSmooth>
                        About
                    </Link>
                </li>
                <li className="p-4 text-4xl hover:text hover:text-gray-500" >
                    <Link href='#myStory' scrollSmooth>
                        My Story
                    </Link>
                </li>
                <li className="p-4 text-4xl hover:text hover:text-gray-500">
                    <Link href='#projects' scrollSmooth>
                        Projects
                    </Link>
                </li>
                <li className="p-4 text-4xl hover:text hover:text-gray-500">
                    <Link href='#contact' scrollSmooth>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
    return(


        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-[rgb(32,32,32)]">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
                <Link href=''>
                    <h1></h1>
                </Link>
                <ul className="hidden sm:flex ">
                    <li className='p-4 text-xl'>
                        <Link href='/' scrollSmooth>
                            About
                        </Link>
                    </li>
                    <li className='p-4 text-xl'>
                        <Link href='#myStory' scrollSmooth>
                            My Story
                        </Link>
                    </li>
                    <li className='p-4 text-xl'>
                        <Link href='#projects' scrollSmooth>
                            Projects
                        </Link>
                    </li>
                    <li className='p-4 text-xl'>
                        <Link href='#contact' scrollSmooth>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="block sm:hidden z-10 ">
                    {!nav ? <AiOutlineMenu size={20} onClick={()=>setNav(true)}/>: <AiOutlineClose size={20} onClick={()=>setNav(false)}/>}
                </div>
                {nav? mobileNav:null}
            </div>
        </div>
    )
}