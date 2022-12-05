import heroImg from "./assets/warriorsAssets/hero.png"
import ragingBlow from "./assets/warriorsAssets/ragingBlowIcon.png"

import paladinImg from "./assets/warriorsAssets/paladin.png"
import divineStigma from "./assets/warriorsAssets/divineStigmaIcon.png"

import darkKnightImg from "./assets/warriorsAssets/darkKnight.png"
import darkImpale from "./assets/warriorsAssets/darkImpaleIcon.png"

const warriors = [
    {
    id: 1,
    class: "Hero",
    // url: "./assets/warriorsAssets/hero.png",
    urlName: heroImg,
    urlString: "heroImg",
    avatar: 
        [
        "./assets/warriorAssets/heroAvatarOne.png",
        "./assets/warriorAssets/heroAvatarTwo.png"
        ],
    weapon: "Sword or Axe",
    description: "A Hero's specialty is Combo Attack, which grants Combo orbs when attacking enemies that increase the player's damage. Hero can also cast Enrage, which increases the damage of their main attacks while reducing the number of enemies hit.",
    mainAttack:
            {
            skillName: "Raging Blow",
            // url: "./assets/warriorAssets/ragingBlowIcon.png",
            urlName: ragingBlow,
            effect: "assets/warriors/ragingBlowEffect.gif",
            description: "Attack multiple enemies in front of you multiple times in a row. The last attack will be a critical hit. When your Combo is fully charged, the skill is enhanced. In addition, enhances Aura Blade."
            }
    },
    {
    id: 2,
    class: "Paladin",
    // url: "./assets/warriorAssets/paladin.png",
    urlName: paladinImg,
    urlString: "paladinImg",
    avatar: 
        [
        "./assets/warriorAssets/paladinAvatarOne.png",
        "./assets/warriorAssets/paladinAvatarTwo.png"
        ],
    weapon: "Sword or Mace",
    description: "A Paladin uses Holy Power attacks to scar the battlefield. Their job specialty skill is Vessel of Light, which increases their attack power and reduces damage taken from enemies when using Holy Power attacks.",
    mainAttack:
            {
            skillName: "Divine Stigma",
            // url: "./assets/warriors/divineStigmaIcon.png",
            urlName: divineStigma,
            effect: "./assets/warriors/divineStigmaEffect.gif",
            description: "Summon a more powerful divine hammer. Divine Charge's damage and range are increased, and Divine Stigma can be used at certain intervals. When Divine Stigma is used, a stigma of light is engraved at the location of the attack, and after a certain period of time, the stigma explodes to attack enemies in a wide range. Party members bonded with Holy Unity will not activate the stigma explosion."
            }  
    },
    {
    id: 3,
    class: "Dark Knight",
    // url: "./assets/warriorAssets/darkKnight.png",
    urlName: darkKnightImg,
    urlString: "darkKnightImg",
    avatar: 
        [
        "./assets/warriorAssets/darkKnightAvatarOne.png",
        "./assets/warriorAssets/darkKnightAvatarTwo.png"
        ],
    weapon: "Spear or Polearm",
    description: "A Dark Knight uses their powers to heal themselves while attacking. Their job specialty skill is Evil Eye, a spirit of darkness that supports allies and pushes the Dark Knight's power to its limits.",
    mainAttack:
            {
            skillName: "Dark Impale",
            // url: "./assets/warriorAssets/darkImpaleIcon.png",
            urlName: darkImpale,
            effect: "./assets/warriors/darkImpaleEffect.gif",
            description: "Stab your spear quickly enough to be invisible to attack multiple enemies in front of you."
            }  
    }
];

export default warriors;