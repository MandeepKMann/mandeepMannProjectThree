// import Yeti from "./assets/yetiError.png"
import { Link } from "react-router-dom"
import "./Error.css"
import blackMage from "./assets/blackMage.png"



const Error = () => {
    return (
        <section className="Error">
            <h1 className="errorMessage">...uh you're not supposed to be here yet</h1>
            <img src={blackMage} alt="A dark figure in a black robe" />
            <Link to="/">
                <button>Escape!</button>
            </Link>
        </section>
    )
}

export default Error