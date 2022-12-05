import { Fragment } from "react";
import warriors from "./warriors.js";

// const showImage = (characterList) => {
//     const showImage = (prevCharacter) => {
//     const src = "./assets/warriorAssets/hero.png"
//     if (prevCharacter.character.userSelection = "Hero") {
//         src = './assets/warriorAssets/hero.png'
//     } else if (prevCharacter.character.userSelection = "Paladin") {
//         src = './assets/warriorAssets/paladin.png'
//     } else if (prevCharacter.character.userSelection = "Dark Knight") {
//         src = './assets/warriorAssets/darkKnight.png'
//     }
// }
// }



const Characters = ({characterList}) => {
    console.log(characterList)
    return (
        <Fragment>
            {characterList.map((prevCharacter) => {
        
                return (
                    <li key={prevCharacter.key}>
                        <p>{prevCharacter.character.userCharName}</p>
                        <img src='' alt={`A picture of a ${prevCharacter.character.userSelection}`} />
                        <ul>
                            <li>Class: {prevCharacter.character.userSelection}</li>
                        </ul>
                    </li>
                )
            })}
        </Fragment>

    )

}


export default Characters