import app from './firebase.js'
import { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
// import warriors from './warriors.js';
import WarriorList from './WarriorList.js';
import Form from './Form.js';
import './App.css';

function App() {
    
    const [userSelectedInput, setUserSelectedInput] = useState('')
    const [userTextInput, setUserTextInput] = useState('')
    
    const [userInput, setUserInput] = useState({
        userSelection: "",
        userCharName: ""
    })


// https://www.youtube.com/watch?v=-KBS93RlUCY
    const handleChange = (e) => {
        const {name, value} = e.target

        setUserTextInput((prev) => {
            return {...prev, [name]: value}
        })

        setUserSelectedInput((prev) => {
            return {...prev, [name]: value}
        })

        setUserInput((prev) => {
            return {...prev, [name]: value}
        })

        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const database = getDatabase(app);
        const dbRef = ref(database);

        push(dbRef, userInput);
        console.log(userInput)
    }


    return (
        <div className="App">
            <header>
                <h1>Path of the Warrior</h1>
                <ul>
                <WarriorList />
                <Form
                handleChange={handleChange}
                userSelectedInput={userSelectedInput}
                userTextInput={userTextInput}
                handleSubmit={handleSubmit}
                />
                
                </ul>
            </header>
        </div>
    );
}

export default App;
