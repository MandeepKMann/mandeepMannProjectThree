import heroImg from "./assets/warriorsAssets/hero.png"
import ragingBlow from "./assets/warriorsAssets/ragingBlowIcon.png"
import ragingBlowEffect from "./assets/warriorsAssets/ragingBlowEffect.gif"

import paladinImg from "./assets/warriorsAssets/paladin.png"
import divineStigma from "./assets/warriorsAssets/divineStigmaIcon.png"
import divineStigmaEffect from "./assets/warriorsAssets/divineStigmaEffect.gif"

import darkKnightImg from "./assets/warriorsAssets/darkKnight.png"
import darkImpale from "./assets/warriorsAssets/darkImpaleIcon.png"
import darkImpaleEffect from "./assets/warriorsAssets/darkImpaleEffect.gif"

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
            effectName: ragingBlowEffect,
            description: "Attack multiple enemies in front of you multiple times in a row. The last attack will be a critical hit. When your Combo is fully charged, the skill is enhanced."
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
            effectName: divineStigmaEffect,
            description: "Summon a more powerful divine hammer. When Divine Stigma is used, a stigma of light is engraved at the location of the attack, and after a certain period of time, the stigma explodes to attack enemies in a wide range."
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
            effectName: darkImpaleEffect,
            description: "Stab your spear quickly enough to be invisible to attack multiple enemies in front of you."
            }  
    }
];

export default warriors;