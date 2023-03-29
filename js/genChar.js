Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

Object.prototype.random = function () {
    var keys = Object.keys(this);
    return keys[ keys.length * Math.random() << 0];
};

var classes = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Rogue", "Ranger", "Sorcerer", "Warlock", "Wizard"]

var races = {
    // Str, Dex, Con, Int, Wis, Cha 
    "Dragonborn":[2,0,0,0,0,1], 
    "Dwarven": [0,0,2,0,0,0], 
    "Elven": [0,2,0,0,0,0],
    "Gnomish": [0,0,0,2,0,0],
    "Half Elf": [0,0,0,1,1,2],
    "Halfling": [0,2,0,0,0,0],
    "Half Orc": [2,0,1,0,0,0],
    "Human": [1,1,1,1,1,1],
    "Tiefling": [0,0,0,1,0,2],
    "Leonin": [1,0,2,0,0,0],
    "Owlin": [0,0,0,0,0,0],
    "Aarakocra": [0,0,0,0,0,0],
    "Aasimar": [0,0,0,0,0,0],
    "Air Genasi": [0,0,0,0,0,0],
    "Bugbear": [0,0,0,0,0,0],
    "Centaur": [0,0,0,0,0,0],
    "Changeling": [0,0,0,0,0,0],
    "Deep Gnome": [0,0,0,0,0,0],
    "Duergar": [0,0,0,0,0,0],
    "Earth Genasi": [0,0,0,0,0,0],
    "Eladrin": [0,0,0,0,0,0],
    "Fairy": [0,0,0,0,0,0],
    "Firbolg": [0,0,0,0,0,0],
    "Fire Genasi": [0,0,0,0,0,0],
    "Githyanki": [0,0,0,0,0,0],
    "Githzerai": [0,0,0,0,0,0],
    "Goblin": [0,0,0,0,0,0],
    "Goliath": [0,0,0,0,0,0],
    "Harengon": [0,0,0,0,0,0],
    "Hobgoblin": [0,0,0,0,0,0],
    "Kenku": [0,0,0,0,0,0],
    "Kobold": [0,0,0,0,0,0],
    "Lizardfolk": [0,0,0,0,0,0],
    "Minotaur": [0,0,0,0,0,0],
    "Orc": [0,0,0,0,0,0],
    "Satyr": [0,0,0,0,0,0],
    "Sea Elf": [0,0,0,0,0,0],
    "Shadar Kai": [0,0,0,0,0,0],
    "Shifter": [0,0,0,0,0,0],
    "Tabaxi": [0,0,0,0,0,0],
    "Tortle": [0,0,0,0,0,0],
    "Triton": [0,0,0,0,0,0],
    "Water Genasi": [0,0,0,0,0,0],
    "Yuan Ti": [0,0,0,0,0,0],
    "Feral Tiefling": [2,0,0,1,0,0],
    "Kalashtar": [0,0,0,0,2,1],
    "Warforged": [0,0,2,1,0,0],
    "Loxodon": [0,0,2,0,1,0],
    "Simic Hybrid": [0,0,2,0,0,1],
    "Vedalken": [0,0,0,2,1,0],
    "Verdan": [0,0,1,0,0,2],
    "Locathah": [2,1,0,0,0,0],
    "Grung": [0,2,1,0,0,0],
}

function genChar(){
    let classChoice = classes.random();
    let race = races.random();
    let bonus = races[race]
    let stats = []
    for (let i = 0; i < 6; i++) {
        let dices = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
        var min = Math.min(...dices);
        dices = dices.filter(e => e != min);
        stats.push(dices.reduce((a, b) => a + b, 0) + bonus[i]);
        }
    
    let finalStats = []
    for (let i = 0; i < 6; i++) {
        finalStats.push(stats[i] + bonus[i]);
    }
    
    let health = finalStats[2] - 10;
    health = Math.floor(health / 2);
    if (classChoice == "Wizard" || classChoice == "Sorcerer"){
        health = 6 + health
    }else {
        if (classChoice == "Barbarian"){
            health = 12 + health
        } else {
            if (classChoice == "Paladin" || classChoice == "Ranger" || classChoice == "Fighter"){
                health = 10 + health
            } else {    
                health = 8 + health
            }
        }
    }

    let output = race + " " + classChoice + " "
    for (let i of finalStats){
        output += i
        output += " "
    }
    output += " with " + health + " health."
    return output
}