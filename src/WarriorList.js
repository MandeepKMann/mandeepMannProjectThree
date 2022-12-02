import warriors from "./warriors.js";

const WarriorList = () => {
    return (
        <div>
            {warriors.map((subClass) => {
                return(
                <li key={subClass.id}>
                    <h2>{subClass.class}</h2>
                    <p>{subClass.description}</p>
                    <img src={subClass.avatar} alt={`A cute little ${subClass.class}`} />
                </li>
                )
            })}
        </div>
    )
}

export default WarriorList;