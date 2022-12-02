// const Form = ({handleChange, userTextInput, userSelectInput, handleSubmit}) => {
const Form = ({handleChange, userInput, handleSubmit}) => {

    // Mandy from helpcue was super helpful in helping me reorganize my props!
    const userSelectInput = userInput.userSelection
    const userTextInput = userInput.userCharName

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userSelection"></label>
            <select 
                onChange={handleChange}
                name="userSelection" 
                id="userSelection"
                value={userSelectInput}
            >
                <option value="" disabled>Pick a Subclass</option>
                <option value="Hero">Hero</option>
                <option value="Paladin">Paladin</option>
                <option value="Dark Knight">Dark Knight</option>
            </select>

            <label htmlFor="userCharName"></label>
            <input
                name="userCharName"
                onChange={handleChange} 
                type="text"
                id="userCharName"
                value={userTextInput}
             />

             <button type="submit">hi i'm a button~</button>
        </form>
    )
}

export default Form;