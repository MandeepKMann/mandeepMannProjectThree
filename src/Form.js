const Form = () => {
    return (
        <form>
            <label htmlFor="userSelection"></label>
            <select 
                // onChange={SOMETHING}
                name="userSelection" 
                id="userSelection"
                // value={SOMETHING}
            >
                <option value="" disabled>Pick a Subclass</option>
                <option value="Hero">Hero</option>
                <option value="Paladin">Paladin</option>
                <option value="Dark Knight">Dark Knight</option>
            </select>

            <label htmlFor="userCharName"></label>
            <input
                // onChange={SOMETHING} 
                type="text"
                id="userCharName"
                // value={SOMETHING}
             />

             <button type="submit">hi i'm a button~</button>
        </form>
    )
}

export default Form;