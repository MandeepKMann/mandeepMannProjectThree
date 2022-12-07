import { Fragment } from "react"
import "./Form.css"
import { Link } from "react-router-dom"
import Home from "./assets/home.png"

const Form = ({handleChange, userInput, handleSubmit}) => {

    // Mandy from helpcue was super helpful in helping me reorganize my props!
    const userSelectInput = userInput.userSelection
    const userTextInput = userInput.userCharName

    return (
        <Fragment>
            <section className="formSection">
                    <Link to="/">
                        <img src={Home} alt="The home button" className="homeButton"/>
                    </Link>

                    <Link to="/warriorsinfo">
                        <button className="back">Go Back</button>
                    </Link>

                    <Link to="characters">
                        <button className="toChars">View Characters</button>
                    </Link>

                <div className="wrapper formFlex">
                    <div className="formContainer">
                        <h2>Create Your Warrior</h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <label htmlFor="userSelection">Select Your Subclass:</label>
                            <select 
                                onChange={handleChange}
                                name="userSelection" 
                                id="userSelection"
                                value={userSelectInput}
                                required
                            >
                                <option value="" disabled>Select One</option>
                                <option value="Hero">Hero</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Dark Knight">Dark Knight</option>
                            </select>

                            <label htmlFor="userCharName">Character Name:</label>
                            <input
                                name="userCharName"
                                onChange={handleChange} 
                                type="text"
                                id="userCharName"
                                value={userTextInput}
                                required
                            />

                            <button type="submit">Create Character</button>
                        </form>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default Form;