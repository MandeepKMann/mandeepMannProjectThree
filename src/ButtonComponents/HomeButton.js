import { Link } from "react-router-dom"
import Home from "../assets/home.png"
import "./HomeButton.css"

const HomeButton = () => {
    return (
        <Link to="/" className="routerLink" id="homeButton">
            <img src={Home} alt="The home button" className="homeImage"/>
            <span className="sr-only">Home Button</span>
        </Link>
    )
}

export default HomeButton