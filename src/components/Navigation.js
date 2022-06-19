import { Link } from "react-router-dom"


export default function Navigation(){
    return(
        <header className="banner backdrop-filter">
            <h1 className="title">Fun with Triangles 📐</h1>
        <nav className="navigation">
            <Link to="/" className="link link-primary">Is Triangle?</Link>
            <Link to="/quiz" className="link link-primary" >Quiz</Link>
            <Link to="/hypotenuse" className="link link-primary" >Hypotenuse</Link>
            <Link to="/area" className="link link-primary">Area</Link>
        </nav>
        </header>
    )
}