import app from './firebase.js'
import { useState } from 'react';
import warriors from './warriors.js';
import WarriorList from './WarriorList.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <h1>Path of the Warrior</h1>
            <WarriorList />
            
        </header>
    </div>
  );
}

export default App;

{/**
STEP 1: import stuff (useState, firebase, warriors.js)
STEP 2: Set up a stateful variable to hold userInput as an empty array ( [] )?
STEP 3: (STRETCH GOAL) In my return, map through my array of warrior subclasses to display some of their info on the page to help the user make their decision (above the userInput form)
STEP 4: Create a Form.js component with form with an input where the user can:
    - select their subclass from a dropdown menu
    - Input a string of text for their character name
STEP 5: on the form, add  onChange and pass through handleChange prop AND add onSubmit and pass through userInput prop
STEP 6: in App.js create a changeHandler that will trigger every time there’s a change in our input fields (both the dropdown and the text input) AND store the resulting data in the stateful variable userInput
STEP 7: in App.js create a handleSubmit to:
    - Prevent default (page refreshing)
    - Get access to the database (const database = getDatabase(app); const dbRef = ref(database);)
    - Push userInput into the database (push(dbRef, userInput);)
    - MAYBE at this step clear the input form? (setUserIInput(‘ ’);)
STEP 8: do i need useEffect here? maybe not with an empty array but when the user submits their form? I need to get access to the database and pull data that was pushed and display it on the page
    - Get access to db AGAIN or for the first time depending on the order I do this in SO (const database = getDatabase(app); const dbRef = ref(database);)
    - Use onValue to get the data from firebase and store in in a variable (const data)
    - Create a variable for the array of data i will get from database
    - Use for loop ONLY IF i decide not to give id to each subclass a id/key…i think?
    - THENNNN use useState to set a NEW stateful variable to the variable i created to hold the database info
STEP 9: in my return…perhaps a different component? Maybe all in App.js? (:
Create a ul where I map through variable with the data from firebase to return li with the information displayed using dot notation 
*/}