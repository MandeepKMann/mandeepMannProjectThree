// IMPORTS
import { Link } from "react-router-dom"
// COMPONENTS
import HomeButton from "../components/HomeButton"
// CSS
import "../styles/Form.css"

const Form = ({handleChange, userInput, handleSubmit}) => {

    // Mandy from helpcue was super helpful in helping me reorganize my props!
    const userSelectInput = userInput.userSelection
    const userTextInput = userInput.userCharName

    return (
        <section className="formSection">
            {/* Link to Header.js */}
            <HomeButton />

            <div className="wrapper formFlex">
                <div className="formContainer">
                    <h2>Create Your Warrior</h2>
                    {/* Form */}
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
                </div>{/* END .formContainer */}
            </div>{/* END .wrapper .formFlex */}

            {/* Links to WarriorInfo.js and Characters.js */}
            <Link to="/warriorsinfo" className="routerLink" id="backWarriorInfo">
                The Three Ways
            </Link>

            <Link to="characters" className="routerLink" id="toChars">
                View Characters
            </Link>

        </section>
    )
}

export default Form;