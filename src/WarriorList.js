import warriors from "./warriors.js";

const WarriorList = () => {
    return (
        <div>
            {warriors.map((subClass) => {
                return(
                <li key={subClass.id}>
                    <h2>{subClass.class}</h2>
                    <p>{subClass.description}</p>
                    <img src={subClass.urlName} alt={`A cute little ${subClass.class}`} />
                    <ul className="mainSkill">
                        <li><img src={subClass.mainAttack.urlName} alt={`Icon for ${subClass.mainAttack.skillName} skill`} /></li>
                        <li>{subClass.mainAttack.description}</li>
                    </ul>
                </li>
                )
            })}
        </div>
    )
}

export default WarriorList;
