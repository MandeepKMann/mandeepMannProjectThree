// IMPORTS
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import BackToTopButton from './ButtonComponents/BackToTopButton';
import HomeButton from './ButtonComponents/HomeButton';
// JS FILES
import warriors from "./warriors.js";
// CSS
import './Characters.css'

const Characters = ({characterList}) => {
    return (
        <section className="pastCharactersSection">

            {/* Home button to Header.js and Link back to Form.js*/}
            <HomeButton />
 
            <Link to="/warriorsinfo/form" className='routerLink' id='toCreate'>
                Create Another Warrior
            </Link>
 
            <div className="wrapper">
                <ul className="createdCharList">
                {/* Map through data from firebase */}
                {characterList.map((prevCharacter) => {
                    return (
                        <li key={prevCharacter.key} className="createdChar">
                            <p className="charIGN">{prevCharacter.character.userCharName}</p>
                            
                            {/* Map through my original Data fromw warriors.js to compare with firebase data */}
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
                            })}{/* END warriors.map */}   
                        </li>
                    )
                })}{/* END charachterlist.map */}
                </ul>
            </div>{/* END .wrapper */}

            <BackToTopButton />
        </section>

    )
}

export default Characters;
