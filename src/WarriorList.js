import { Fragment } from "react";
import warriors from "./warriors.js";
import "./WarriorList.css"

const WarriorList = () => {
    return (
        <Fragment>
            <h2 className='infoTitle'>The Three Ways of the Warrior</h2>
            <p>I feel an unusual energy from you. I know that you've only recently become a Warrior. How did you become so strong in such a short time?</p>
            <p>I think it's time for you to choose your path. You've chosen the path of a Warrior, but there are more choices after that.</p>
            <p>A Warrior can choose from three different paths. A Fighter is a normal Warrior who uses a sword or axe, a Page looks out for enemies and shields others, and a Spearman uses a long weapon, such as a spear or other type of polearm.</p>
            <p>What do you think? Are you ready for a second path?</p>
            <ul className='warriorsInfo'>
                {warriors.map((subClass) => {
                    return(

                    <li key={subClass.id} className="subClassInfo">
                        {/* Subclass Info */}
                        <h2 className="subClassName">{subClass.class}</h2>

                        <p className="subClassDescription">{subClass.description}</p>

                        <div className="imageContainer">
                            <img className="subClassImg" src={subClass.urlName} alt={`A cute little ${subClass.class}`} />
                        </div>

                        {/* Skill Info */}
                        <div className="mainSkill">
                            <div className="skillContainer">
                                <img src={subClass.mainAttack.urlName} alt={`Icon for ${subClass.mainAttack.skillName} skill`} />
                                <h4>{subClass.mainAttack.skillName} </h4>
                            </div>
                            <p className="skillInfo">{subClass.mainAttack.description}</p>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </Fragment >
    )
}

export default WarriorList;
