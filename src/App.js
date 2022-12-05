import app from './firebase.js'
import { Fragment, useEffect, useState } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import Swal from 'sweetalert2'
import WarriorList from './WarriorList.js';
import Form from './Form.js';
import Characters from './Characters.js';
import Divider from './Divider.js';
import './App.css';

function App() {
    
    const [userInput, setUserInput] = useState({
        userSelection: "",
        userCharName: ""
    })

    const [characterList, setCharacterList] = useState({})

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
        const dbRef = ref(database, );

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
            <header>
                <div className="wrapper">
                    <div className="backgroundContainer"></div>
                </div>
            </header>

            <main>
                
                <Divider />
                
                <section className='information'>
                    <div className="wrapper">
                        <h2 className='infoTitle'>Path of the Warrior</h2>
                        <ul className='warriorsInfo'>
                            <WarriorList />
                        </ul>
                    </div>
                </section>

               <Divider />

                <section className='formSection'>
                    <Form
                        handleChange={handleChange}
                        userInput={userInput}
                        handleSubmit={handleSubmit}
                    />

                </section>

                <Divider />
                
                <section>
                    <ul>
                        <Characters
                            characterList={characterList}
                        />
                    </ul>
                </section>
    
            </main>




        </Fragment>
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