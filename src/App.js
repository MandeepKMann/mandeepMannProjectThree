import { Fragment, useEffect, useState } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';

// Installed
import app from './firebase.js'
import Swal from 'sweetalert2'

// Sections
import WarriorInfo from './WarriorInfo.js';
import Form from './Form.js';
import Characters from './Characters.js';
import Divider from './Divider.js';
import Header from './Header.js';

// CSS
import './App.css';

function App() {
    
    const [userInput, setUserInput] = useState({
        userSelection: "",
        userCharName: ""
    })

    const [characterList, setCharacterList] = useState([])

// https://www.youtube.com/watch?v=-KBS93RlUCY
    const handleChange = (e) => {
        const {name, value} = e.target

        setUserInput((prev) => {
            return {...prev, [name]: value}
        })


    }
    
    const checkSpecialChar = (string) => {
        // eslint-disable-next-line
        const specialChars = (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
        return specialChars.test(string)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (checkSpecialChar(userInput.userCharName) === true) {

            Swal.fire({
                icon: 'warning',
                text: 'Your character name can only contain letters and numbers!',
                background: '#0F141A',
                color: 'white',
                borderRadius: '1',
                showConfirmButton: false,
                timer: 3000
            })
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
                text: 'Your character has been created!',
                background: '#0F141A',
                color: 'white',
                borderRadius: '1',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }
    

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
        <Fragment>

            <Header />

            <main>
                <Divider />

                <WarriorInfo />

                <Divider />

                <Form
                    handleChange={handleChange}
                    userInput={userInput}
                    handleSubmit={handleSubmit}
                />

                <Divider />
                
                <Characters
                    characterList={characterList}
                />
                    
            </main>

        </Fragment>
    );
}

export default App;