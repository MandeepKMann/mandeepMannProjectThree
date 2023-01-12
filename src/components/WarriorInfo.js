// IMPORTS
import { Link } from "react-router-dom";
// COMPONENTS
import BackToTopButton from "../components/BackToTopButton.js";
import HomeButton from "../components/HomeButton.js";
// JS FILES
import warriors from "../warriors.js";
// CSS
import "../styles/WarriorInfo.css"

const WarriorInfo = () => {
    return (
        <section className="warriorInfoSection">
            
            <div className="wrapper">
                {/* Link to Home */}
                <HomeButton />

                {/* Title and text blurb for Warrior Info */}
                <div className="subClassInfo">
                    <h2 className='infoTitle'>The Three Ways of the Warrior</h2>
                    <p>I feel an unusual energy from you. I know that you've only recently become a Warrior. How did you become so strong in such a short time?</p>
                    <p>I think it's time for you to choose your path. A Warrior can choose from three different paths. A Hero is a normal Warrior who uses a sword or axe, a Paladin looks out for enemies and shields others, and a Dark Knight uses a long weapon, such as a spear or other type of polearm.</p>
                </div>{/* END .subClassInfo */}

                {/* ul for all three warrior subclasses */}
                <ul className='warriorsInfoUl'>

                    {/* Map through all warrior.js to display all three subclasses on page */}
                    {warriors.map((subClass) => {
                        return (
                            <li key={subClass.id} className="subClassLi">

                                <h2 className="subClassName">{subClass.class}</h2>
                                <p className="subClassDescription">{subClass.description}</p>

                                <div className="imageContainer">
                                    <img className="subClassImg" src={subClass.urlName} alt={`A ${subClass.class}`} />
                                </div>{/* END .imageContainer */}

                                <div className="mainSkill">
                                    <div className="skillTitle">
                                        <img src={subClass.mainAttack.urlName} alt={`Icon for ${subClass.mainAttack.skillName} skill`} />
                                        <h4>{subClass.mainAttack.skillName} </h4>
                                    </div>{/* END .skillTitle */}
                                    <p className="skillInfo">{subClass.mainAttack.description}</p>
                                </div>{/* END .mainSkill */}

                            </li>
                        )
                    })}
                </ul>
            
                {/* Question and Link to Form.js */}
                <p className="question">What do you think? Are you ready for a second path?</p>
                <Link to="form" className="routerLink warriorLink">
                    I'm Ready
                </Link>
            </div>{/* END .wrapper */}
            
            {/* Scroll to top button */}
            <BackToTopButton />
        </section>
    )
}

export default WarriorInfo;
