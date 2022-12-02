import warriors from "./warriors.js";

import hero from "./assets/warriorsAssets/hero.png"

const WarriorList = () => {
    return (
        <div>
            {warriors.map((subClass) => {
                // console.log(subClass.url)
                return(
                <li key={subClass.id}>
                    <h2>{subClass.class}</h2>
                    <p>{subClass.description}</p>
                    {/* <img src={subClass.url} alt={`A cute little ${subClass.class}`} /> */}
                </li>
                )
            })}
        </div>
    )
}

export default WarriorList;