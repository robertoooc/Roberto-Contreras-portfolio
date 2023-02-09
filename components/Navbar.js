// import Link from next
import Link from "next/link";
export default function Navbar(){
    return(
        <nav>
            <Link href=''>
                {/* links take any child component */}
                Home
            </Link>
            <Link href=''>
                {/* links take any child component */}
                About
            </Link>
            {/* outside sources use regular a tags */}
            <a 
            href="https://github.com/robertoooc"
            target='_blank'
            >github</a>
        </nav>
    )
}