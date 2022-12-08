// IMAGES
// HERO IMAGES
import heroImg from "./assets/warriorsAssets/hero.png"
import ragingBlow from "./assets/warriorsAssets/ragingBlowIcon.png"
// PALADIN IMAGES
import paladinImg from "./assets/warriorsAssets/paladin.png"
import divineStigma from "./assets/warriorsAssets/divineStigmaIcon.png"
// DARK KNIGHT IMAGES
import darkKnightImg from "./assets/warriorsAssets/darkKnight.png"
import darkImpale from "./assets/warriorsAssets/darkImpaleIcon.png"


const warriors = [
    {
    id: 1,
    class: "Hero",
    urlName: heroImg,
    urlString: "heroImg",
    description: "A Hero's specialty is Combo Attack, which grants Combo orbs when attacking enemies that increase the player's damage. Hero can also cast Enrage, which increases the damage of their main attacks while reducing the number of enemies hit.",
    mainAttack:
            {
            skillName: "Raging Blow",
            urlName: ragingBlow,
            description: "Attack multiple enemies in front of you multiple times in a row. The last attack will be a critical hit. When your Combo is fully charged, the skill is enhanced."
            }
    },
    {
    id: 2,
    class: "Paladin",
    urlName: paladinImg,
    urlString: "paladinImg",
    description: "A Paladin uses Holy Power attacks to scar the battlefield. Their job specialty skill is Vessel of Light, which increases their attack power and reduces damage taken from enemies when using Holy Power attacks.",
    mainAttack:
            {
            skillName: "Divine Stigma",
            urlName: divineStigma,
            description: "Summon a more powerful divine hammer. When Divine Stigma is used, a stigma of light is engraved at the location of the attack, and after a certain period of time, the stigma explodes to attack enemies in a wide range."
            }  
    },
    {
    id: 3,
    class: "Dark Knight",
    urlName: darkKnightImg,
    urlString: "darkKnightImg",
    description: "A Dark Knight uses their powers to heal themselves while attacking. Their job specialty skill is Evil Eye, a spirit of darkness that supports allies and pushes the Dark Knight's power to its limits.",
    mainAttack:
            {
            skillName: "Dark Impale",
            urlName: darkImpale,
            description: "Stab your spear quickly enough to be invisible to attack multiple enemies in front of you."
            }  
    }
];

export default warriors;