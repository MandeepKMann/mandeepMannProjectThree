import { Fragment } from "react";
import warriors from "./warriors.js";
import "./WarriorList.css"

const WarriorList = () => {
    return (
        <Fragment>
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
        </Fragment >
    )
}

export default WarriorList;
