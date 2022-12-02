const Form = ({handleChange, userSelectedInput, userTextInput, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="userSelection"></label>
            <select 
                onChange={handleChange}
                name="userSelection" 
                id="userSelection"
                value={userSelectedInput}
            >
                <option value="" disabled>Select a Subclass</option>
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

             <button type="submit">Confirm</button>
        </form>
    )
}

export default Form;