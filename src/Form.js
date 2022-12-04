import "./Form.css"

const Form = ({handleChange, userInput, handleSubmit}) => {

    // Mandy from helpcue was super helpful in helping me reorganize my props!
    const userSelectInput = userInput.userSelection
    const userTextInput = userInput.userCharName

    return (
        <div className="formContainer">
            <h2>Create Your Warrior</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="userSelection">Select your warrior:</label>
                <select 
                    onChange={handleChange}
                    name="userSelection" 
                    id="userSelection"
                    value={userSelectInput}
                    required
                >
                    <option value="" disabled>Pick a Subclass</option>
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

                <button type="submit">Create Characrer</button>
            </form>
        </div>
    )
}

export default Form;