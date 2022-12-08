// import Yeti from "./assets/yetiError.png"
import { Link } from "react-router-dom"
import "./Error.css"
import blackMage from "./assets/blackMage.png"



const Error = () => {
    return (
        <section className="error">
            <div className="wrapper errorFlex">
                <h1 className="errorMessage">...uh you're not supposed to be here yet</h1>
                <div className="errorImage">
                    <img src={blackMage} alt="A dark figure in a black robe" />
                </div>
                <Link to="/" className="routerLink" id="escape">
                    Escape!
                </Link>
            </div>
        </section>
    )
}

export default Error