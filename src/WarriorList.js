import { Fragment } from "react";
import warriors from "./warriors.js";

const WarriorList = () => {
    return (
        <Fragment>
            {warriors.map((subClass) => {
                return(
                <li key={subClass.id} className="subClassInfo">
                    <h2 className="subClassName">{subClass.class}</h2>
                    <p className="subClassDescription">{subClass.description}</p>
                    <img classname="subClassImg" src={subClass.urlName} alt={`A cute little ${subClass.class}`} />
                    <ul className="mainSkill">
                        <li><img src={subClass.mainAttack.urlName} alt={`Icon for ${subClass.mainAttack.skillName} skill`} /></li>
                        <li>{subClass.mainAttack.description}</li>
                    </ul>
                </li>
                )
            })}
        </Fragment >
    )
}

export default WarriorList;
