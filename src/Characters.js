import { Fragment } from 'react';
import './Characters.css'
import warriors from "./warriors.js";

const Characters = ({characterList}) => {
    return (
        <section className="pastCharactersSection">
            <div className="wrapper">
                <ul className="pastCharList">
                {characterList.map((prevCharacter) => {
                // console.log(prevCharacter.key)
                    return (
                        <li key={prevCharacter.key} className="pastChar">
                            <p className="charIGN">{prevCharacter.character.userCharName}</p>
                    
                            {warriors.map((subClass) => {
                                if (subClass.class === prevCharacter.character.userSelection) {
                                    return (
                                        <Fragment>
                                            <img src={subClass.urlName} alt={`A cute little ${subClass.class}`} className="pastCharImg"/>
                                            <p>Class: {prevCharacter.character.userSelection}</p>
                                            <div className="skillContainer">
                                                <img src={subClass.mainAttack.urlName} alt={`Icon for ${subClass.mainAttack.skillName} skill`} />
                                                <h4>{subClass.mainAttack.skillName}</h4>
                                            </div>
                                        </Fragment>
                                    ) 
                                } 
                                
                            })}
                            
                        </li>
                    )
                })}
                </ul>
            </div>
        </section>

    )
}

export default Characters;
