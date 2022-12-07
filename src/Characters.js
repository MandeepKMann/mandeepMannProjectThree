import { Fragment } from 'react';
import './Characters.css'
import warriors from "./warriors.js";
import BackToTopButton from './BackToTopButton.js';
import { Link } from 'react-router-dom';
import Home from "./assets/home.png"
import './App.css';

const Characters = ({characterList}) => {
    return (
        <section className="pastCharactersSection">
            <div className="wrapper">
            <Link to="/">
                <img src={Home} alt="The home button" className="homeButton"/>
            </Link>
            <Link to="/warriorsinfo/form">
                <button className='toCreate'>Create Another Warrior</button>
            </Link>
                <ul className="pastCharList">
                {characterList.map((prevCharacter) => {
                // console.log(prevCharacter.key)
                    return (
                        <li key={prevCharacter.key} className="pastChar">
                            <p className="charIGN">{prevCharacter.character.userCharName}</p>
                            {/* eslint-disable-next-line */}
                            {warriors.map((subClass) => {
                                if (subClass.class === prevCharacter.character.userSelection) {
                                    return (
                                        <Fragment>
                                            <img src={subClass.urlName} alt={`A cute little ${subClass.class}`} className="pastCharImg"/>
                                            <p className='nameOfClass'>Class: {prevCharacter.character.userSelection}</p>
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
                <BackToTopButton />
        </section>

    )
}

export default Characters;
