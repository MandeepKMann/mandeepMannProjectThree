import heroImg from "./assets/warriorsAssets/hero.png"
import ragingBlow from "./assets/warriorsAssets/ragingBlowIcon.png"

import paladinImg from "./assets/warriorsAssets/paladin.png"
import divineStigma from "./assets/warriorsAssets/divineStigmaIcon.png"

import darkKnightImg from "./assets/warriorsAssets/darkKnight.png"
import darkImpale from "./assets/warriorsAssets/darkImpaleIcon.png"

const warriorsObjectTest = {
    // subClasses: {
        hero: {
            id: 1,
            name: "Hero",
            urlName: heroImg,
            url: "./assets/warriorsAssets/hero.png",            
            weapon: "Sword or Axe",
            description: "A Hero's specialty is Combo Attack, which grants Combo orbs when attacking enemies that increase the player's damage. Hero can also cast Enrage, which increases the damage of their main attacks while reducing the number of enemies hit.",
            attack: {
                    skillName: "Raging Blow",
                    urlName: ragingBlow,
                    url: "./assets/warriorAssets/ragingBlowIcon.png",
                    effect: "assets/warriors/ragingBlowEffect.gif",
                    description: "Attack multiple enemies in front of you multiple times in a row. The last attack will be a critical hit. When your Combo is fully charged, the skill is enhanced. In addition, enhances Aura Blade."
            },
            avatar: {
                    one: "./assets/warriorAssets/heroAvatarOne.png",
                    two: "./assets/warriorAssets/heroAvatarTwo.png"
            }
        },
        paladin: {
            id: 2,
            name: "Paladin",
            urlName: paladinImg,
            url: "./assets/warriorAssets/paladin.png",
            weapon: "Sword or Mace",
            description: "A Paladin uses Holy Power attacks to scar the battlefield. Their job specialty skill is Vessel of Light, which increases their attack power and reduces damage taken from enemies when using Holy Power attacks.",
            attack: {
                    skillName: "Divine Stigma",
                    urlName: divineStigma,
                    url: "./assets/warriors/divineStigmaIcon.png",
                    effect: "./assets/warriors/divineStigmaEffect.gif",
                    description: "Summon a more powerful divine hammer. Divine Charge's damage and range are increased, and Divine Stigma can be used at certain intervals. When Divine Stigma is used, a stigma of light is engraved at the location of the attack, and after a certain period of time, the stigma explodes to attack enemies in a wide range. Party members bonded with Holy Unity will not activate the stigma explosion."
            },
            avatar: {
                one: "./assets/warriorAssets/darkKnightAvatarOne.png",
                two: "./assets/warriorAssets/darkKnightAvatarTwo.png"
            }
        },
        darkKnight: {
            id: 3,
            name: "Dark Knight",
            urlName: darkKnightImg,
            url: "./assets/warriorAssets/darkKnight.png",
            weapon: "Spear or Polearm",
            description: "A Dark Knight uses their powers to heal themselves while attacking. Their job specialty skill is Evil Eye, a spirit of darkness that supports allies and pushes the Dark Knight's power to its limits.",
            attack: {
                    skillName: "Dark Impale",
                    urlName: darkImpale,
                    url: "./assets/warriorAssets/darkImpaleIcon.png",
                    effect: "./assets/warriors/darkImpaleEffect.gif",
                    description: "Stab your spear quickly enough to be invisible to attack multiple enemies in front of you."
            },
            avatar: {
                    one: "./assets/warriorAssets/darkKnightAvatarOne.png",
                    two: "./assets/warriorAssets/darkKnightAvatarTwo.png"
            }  
        }
    // }
};

export default warriorsObjectTest;