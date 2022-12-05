import { Fragment } from "react";
// import warriors from "./warriors.js";


const Characters = ({characterList}) => {
    console.log(characterList)
    return (
        <Fragment>
            {characterList.map((prevCharacter) => {
        
                return (
                    <li key={prevCharacter.key}>
                        <p>{prevCharacter.character.userCharName}</p>
                        <img src="" alt={prevCharacter.character.userSelection} />
                    </li>
                )
            })}
        </Fragment>

    )

}

export default Characters