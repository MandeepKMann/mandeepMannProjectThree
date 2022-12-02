import app from './firebase.js'
import { useEffect, useState } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import WarriorList from './WarriorList.js';
import Form from './Form.js';
import Characters from './Characters.js';
import './App.css';

function App() {
    
    const [userInput, setUserInput] = useState({
        userSelection: "",
        userCharName: ""
    })


// https://www.youtube.com/watch?v=-KBS93RlUCY
    const handleChange = (e) => {
        const {name, value} = e.target

        setUserInput((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const database = getDatabase(app);
        const dbRef = ref(database);

        push(dbRef, userInput);
    }

    useEffect( () => {
        const database = getDatabase(app);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const data = response.val()
            const characterList = []
            characterList.push(data)
        })


    }, [] )


    return (
        <div className="App">
            <header>
                <h1>Path of the Warrior</h1>
                <ul>
                    <WarriorList />
                    <Form
                        handleChange={handleChange}
                        userInput={userInput}
                        handleSubmit={handleSubmit}
                    />
                    
                </ul>
            </header>
        </div>
    );
}

export default App;



// const Form = ({handleChange, userInput, handleSubmit}) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="userSelection"></label>
//             <select 
//                 onChange={handleChange}
//                 name="userSelection" 
//                 id="userSelection"
//                 value={userInput}
//             >
//                 <option value="" disabled>Pick a Subclass</option>
//                 <option value="Hero">Hero</option>
//                 <option value="Paladin">Paladin</option>
//                 <option value="Dark Knight">Dark Knight</option>
//             </select>

//             <label htmlFor="userCharName"></label>
//             <input
//                 name="userCharName"
//                 onChange={handleChange} 
//                 type="text"
//                 id="userCharName"
//                 value={userInput}
//              />

//              <button type="submit">hi i'm a button~</button>
//         </form>
//     )
// }

// export default Form;

// const Form = ({handleChange, userTextInput, userSelectInput, handleSubmit}) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="userSelection"></label>
//             <select 
//                 onChange={handleChange}
//                 name="userSelection" 
//                 id="userSelection"
//                 value={userSelectInput}
//             >
//                 <option value="" disabled>Pick a Subclass</option>
//                 <option value="Hero">Hero</option>
//                 <option value="Paladin">Paladin</option>
//                 <option value="Dark Knight">Dark Knight</option>
//             </select>

//             <label htmlFor="userCharName"></label>
//             <input
//                 name="userCharName"
//                 onChange={handleChange} 
//                 type="text"
//                 id="userCharName"
//                 value={userTextInput}
//              />

//              <button type="submit">hi i'm a button~</button>
//         </form>
//     )
// }

// export default Form;