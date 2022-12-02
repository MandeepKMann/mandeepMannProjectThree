import warriors from "./warriors.js";

const WarriorList = () => {
    return (
        <div>
            {warriors.map((subClass) => {
                return(
                <div>
                    <h2>{subClass.class}</h2>
                    <p>{subClass.description}</p>
                    <img src={subClass.avatar} alt={`A cute little ${subClass.class}`} />
                </div>
                )
            })}
        </div>
    )
}

export default WarriorList;