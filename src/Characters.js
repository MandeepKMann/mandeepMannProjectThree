import { Fragment } from "react";
import './Characters.css'
import warriors from "./warriors.js";
import snail from "./assets/snail.png";

// import heroImg from "./assets/warriorsAssets/hero.png"
// import ragingBlow from "./assets/warriorsAssets/ragingBlowIcon.png"

// import paladinImg from "./assets/warriorsAssets/paladin.png"
// import divineStigma from "./assets/warriorsAssets/divineStigmaIcon.png"

// import darkKnightImg from "./assets/warriorsAssets/darkKnight.png"
// import darkImpale from "./assets/warriorsAssets/darkImpaleIcon.png"



const Characters = ({characterList}) => {
    // console.log(characterList)
    return (
        <Fragment>
            <section className="pastCharactersSection">
                <div className="wrapper">
                    <ul className="pastCharList">
                    {characterList.map((prevCharacter) => {
                        return (
                            <li key={prevCharacter.key} className="pastChar">
                                <p>{prevCharacter.character.userCharName}</p>
                                

                                {/* {characterImg = 
                                    prevCharacter.userSelection === "Hero" ? heroImg :  
                                    prevCharacter.userSelection === "Paladin" ? paladinImg :
                                    prevCharacter.userSelection === "Dark Knight" ? darkKnightImg
                                } */}
                                
                                {/* {warriors.forEach(subClass => {
                                    if (subClass.class = prevCharacter.character.userSelection) {
                                        console.log(true)
                                        return (
                                        <img src={subClass.urlName} alt={`A cute little ${subClass.class}`} />
                                        ) 
                                    } 
                                    else {
                                        console.log(false)
                                        return (
                                            <img src={snail} alt={`A ${prevCharacter.character.userSelection}`}></img>
                                        )
                                    }
                                })} */}
                        
                                {warriors.map((subClass) => {

                                    console.log(prevCharacter.character.userSelection)
                                    console.log(subClass.class)
                                    // console.log(subClass.urlName)
                                    if (subClass.class === prevCharacter.character.userSelection) {
                                        console.log(true)
                                        return (
                                            <Fragment>
                                                <img src={subClass.urlName} alt={`A cute little ${subClass.class}`} />
                                                <p>Class: {prevCharacter.character.userSelection}</p>
                                            </Fragment>
                                            
                                        ) 
                                    } 
                                    // else {
                                    //     console.log(false)
                                    //     return (
                                    //         <img src={snail} alt={`A ${prevCharacter.character.userSelection}`}></img>
                                    //     )
                                    // }
                                })}
                                
                                {/* <ul className="pastCharInfo">
                                    <li>
                                        <p>Class: {prevCharacter.character.userSelection}</p>
                                        <p>Skill: blah blah blah</p>
                                    </li>
                                </ul> */}
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </section>
        </Fragment>

    )
}

const CharacterInfo = () => {
    // warriors.map((subClass) => {

    //     console.log(prevCharacter.character.userSelection)
    //     // console.log(subClass.urlName)
    //     if (subClass.class = prevCharacter.character.userSelection) {
    //         console.log(true)
    //         return (
    //                 <img src={subClass.urlName} alt={`A cute little ${subClass.class}`} />
    //         ) 
    //     } 
    //     else {
    //         console.log(false)
    //         return (
    //             <img src={snail} alt={`A cute little ${subClass.class}`}></img>
    //         )
    //     }
    // })
}

// PastCharacters()

export {Characters, CharacterInfo};
