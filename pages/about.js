// this is going to be our /about
// import css module
import styles from '../styles/About.module.css'
export default function About(){
    return(
        <div>
            <h1>About me</h1>
            <h2>Backend developer</h2>
            {/* more than one style can use string interpolation */}
            <p className={styles.p}>Brand Statement</p>
            <p>{`don't use apostrophes unless they are in backticks`}</p>
            {/* styled jsx is great for conditional rendering */}
            <style jsx>{`
                p{
                    color: orange;
                }
                h2{
                    color: yellow;
                }
            `}</style>
            {/* two ways of rendering images: stored locally and a url */}
            <img src='/next.svg' alt='logo'/>
            {/* getting img from outside source */}
            <img src='https://placekitten.com/300/600'
                alt='cat'
            />
        </div>
    )
}