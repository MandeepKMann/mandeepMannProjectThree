// IMPORTS
import { useEffect, useState } from 'react';
import app from './firebase.js'
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2'
// COMPONENTS
import Header from './components/Header.js';
import WarriorInfo from './components/WarriorInfo.js';
import Form from './components/Form.js';
import Characters from './components/Characters.js';
import Error from './components/Error.js';
// CSS
import './App.css';

function App() {
    // useState to hold multiple user inputs from my form in Form.js
    const [userInput, setUserInput] = useState({
        userSelection: "",
        userCharName: ""
    })

    // useState to hold data from firebase to display on Characters.js
    const [characterList, setCharacterList] = useState([])

// Learned from: https://www.youtube.com/watch?v=-KBS93RlUCY
    const handleChange = (e) => {
        const {name, value} = e.target

        setUserInput((prev) => {
            return {...prev, [name]: value}
        })


    }
    
    // Learned from: https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters
    const checkSpecialChar = (string) => {
        // eslint-disable-next-line
        const specialChars = (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
        return specialChars.test(string)
    }


    // Handle submission from Form.js
    const handleSubmit = (e) => {
        e.preventDefault();
        // Show a warning if user uses special characters
        if (checkSpecialChar(userInput.userCharName) === true) {

            Swal.fire({
                icon: 'warning',
                title: 'Your character name can only contain letters and numbers!',
                background: '#0F141A',
                color: 'white',
                borderRadius: '1',
                showConfirmButton: false,
                timer: 3000
            })
        // Show confirmation that user input has been submitted and push to firebase
        } else if (checkSpecialChar(userInput.userCharName) === false) {
            
            const database = getDatabase(app);
            const dbRef = ref(database);
            
            push(dbRef, userInput);
            
            setUserInput({
                userSelection: "",
                userCharName: ""
            })
           
            Swal.fire({
                icon: 'success',
                title: 'Your character has been created!',
                text: `Click on 'View Characters' to see your Warrior!`,
                background: '#0F141A',
                color: 'white',
                borderRadius: '1',
                showConfirmButton: true
            })
        }
    }
    
    // Get data from firebase and store in characterList
    useEffect( () => {
        const database = getDatabase(app);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const data = response.val()

            // use the database key as key for each object
            const dataArray = []
            for (let key in data) {
                dataArray.push({key: key, character:data[key]})
            }

            // push the dataArray into the characterList stateful variable
            setCharacterList(dataArray)
        })
    }, [] )

    return (
        <Routes>
            <Route path="/" element={ <Header /> } />
            <Route path="/warriorsinfo" element={ <WarriorInfo /> } /> 
            <Route 
                path="/warriorsinfo/form" 
                element={ <Form
                    handleChange={handleChange}
                    userInput={userInput}
                    handleSubmit={handleSubmit}
                /> } />
            <Route 
                path="/warriorsinfo/form/characters" 
                element={ <Characters
                    characterList={characterList}
                /> } />
            <Route path="*" element={ <Error />} />
        </Routes>
    );
}

export default App;