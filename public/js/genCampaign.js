//ENCOUNTER GENERATOR

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

Object.prototype.random = function () {
    var keys = Object.keys(this);
    return keys[ keys.length * Math.random() << 0];
};

var easy_num = Math.floor(Math.random() * 10) + 1;
var medium_num = Math.floor(Math.random() * 10) + 5;
var hard_num = Math.floor(Math.random() * 10) + 10;

var other_encounters = [
    "An old woman is sitting on her porch, watching the players as they pass by her home. She asks the players if they have seen her lost pony. She has not lost a pony. She sells extremely rare weapons for thousands of gold pieces (the exact number of which you may decide) but only if they appear to be good people. (The woman has a set of +3 PLATE, a CLOAK OF INVISIBILITY, and an IOUN STONE OF MASTERY). ",
    "The players encounter a man who has been attacked by a pack of wolves that has mauled him terribly, leaving him for dead on the road. He will die if not rescued quickly. He is a famed blacksmith and will forge one +2 MELEE WEAPON for the party. ",
    "The party encounters a caravan of traders, who are more than happy to trade. They will trade any armor and/or weapons, acting as a normal shop. Additionally, they will also sell ARMOR OF VULNERABILITY, for a surprisingly low price of 30 gold pieces. (The armor is cursed, see description). "
  ]
var easy_encounters = [
    `The party sees a farm 300 feet down the road, there is smoke rising from the field. If the party investigates, they will find ${easy_num} GOBLINS ransacking the farm. Looting the remains of the farm will yield ${easy_num} gold pieces. `,
    `As the party passes a bend in the surrounding forest, they find a hungry OWLBEAR, which immediately begins its hunt. (There are OWLBEAR footprints leading to a lair containing pelts and hides worth ${easy_num} gold pieces. `,
    `The party is attacked by a small party of + ${easy_num + 2} BANDITS, although they attempt to run away as soon as they take any real losses (2 or 3 people). `
  ]
var medium_encounters = [
    "An Aurora is lost from the higher planes. It will attack any with an NEUTRAL EVIL, CHAOTIC EVIL, or LAWFUL EVIL alignments. If the players kill the Aurora, they recieve a STAFF OF HEALING. Note: The Aurora is homebrew and can be found at https://www.dandwiki.com/wiki/Aurora_(5e_Creature) ",
    "The party sees two small gray wolves in the middle of the road, howling at the moon. They are actually WEREWOLVES in wolf form, and they will attack if they sense that anyone has sympathetic magic (healing magic, bard music, etc.). ",
    `A group of ${medium_num} BANDITS is attacking a merchant caravan. If the players help the merchant caravan, they will receive a reward, depending on what the merchant is carrying. `
  ]
var hard_encounters = [
    `The party sees a group of ten CULTISTS wearing robes and carrying staffs. They are chanting a spell, and are trying to conjure a BALOR. The party can stop them, or let them summon the demon and see what happens. Looting the bodies will yield ${hard_num} gold pieces. `, 
    `An ARCHMAGE is travelling with the party. They stop for the night and hear chanting from the woods. The ARCHMAGE has snuck away from the party and has begun summoning a BEHOLDER. Upon seeing the party, the ARCHMAGE attacks. After 2 turns, the BEHOLDER will be summoned even if the ARCHMAGE has perished. The ARCHMAGE'S body contains a sizeable fortune of ${hard_num} gold pieces and a STAFF OF POWER. `,
    "The ground shakes around the adventures, and before they know it, they find themselves victims of a TARRASQUE attack. (Good luck surviving this one!) If you survive, you will rewarded with a scale of the TARRASQUE which is worth 5000 gold pieces if sold to the right merchant. ",
    `The party passes an old man on the road. He cries out for help, claiming a great evil has slaughtered his entire village. This great evil is a DEMILICH and an army of ${hard_num} SKELETONS, the DEMILICH resides inside a lair with a DEATH SLAAD, guarding a pile of 1500 gold pieces and a ELDRITCH STAFF.`,
    "Legends say there lies a sprawling cave system under <Insert Place Here> and that terrible evil lurks underneath. If the party pursues these rumors, This will end your campaign, so use our random campaign generator. The party will enter the cave system full of undead mobs of various difficulty, (perhaps add a DEMILICH miniboss) the final boss is an ANCIENT BLUE DRACOLICH, with two DEATH SLAADS acting as bodyguards. Upon slaying the ANCIENT BLUE DRACOLICH, the party will recieve the BLACKSTAFF, and the LUCK BLADE."
  ]

var things = [" Goblins ", " Kobolds ", " Red Dragon Wrymlings ", " Drow Warriors ", " Ancient Blue Dragons ", " Ogres ", " Yuan Ti Shamen ", " Commoners ", " Pirate Captains "]

var verbs = ["living in", "raiding", "running away from", "taxing", "murdering a man in", "making a fire in", "robbing a trader in"]
  
var places = [" Frozen Peak.", " Greenvale.", " Wilmette.", " the forest.", " a cottage.", " a farm.", " an abandonded village."]

function genEnc(){
    var other = other_encounters.random();
    var easy = easy_encounters.random();
    var medium = medium_encounters.random();
    var hard = hard_encounters.random();
    return [easy, medium, hard, other];
}

function randEnc(){
    var number = Math.floor(Math.random() * 40) + 5;
    var thing = things.random();
    var verb = verbs.random();
    var place = places.random();
    var enc = "The party encounters " + number + thing + verb + place;
    return enc;
}

// QUEST GENERATOR

var titles = ["Archduke",  "Assistant", "Queen", "Captain", 
    "Jr.", "Sir","Lord", "Baron", "Farmer", "Archmage", 
    "Supreme Lord of most of existence", "First Sea Lord", "King"]

var names = [
    "Joesephina",  "Bob", "Mary",  "Smith", "Nodrick", "Rick", 
    "Fredrick", "Veznan", "KazaaakplethKilik", "Steve", "Asmoranomardicadaistinaculdacar", 
    "Wolfeschlegelsteinhausenbergerdorff", "Will", "Percival", "Wolfric", "Matt", 
    "Emmett", "Conor", "Jack", "Charlie", "Peng", "Lin", "Poe", "Steelmore", "Rolison", "Ramridder"] 
  
var quests = [
    //Quest formating should be "verb" + "explains problem"
    " tells you that a dragon is attacking the city. To save the city you need to the following: ",
    " yells at you that there is a murder in the town hall. To help police the city you need to: ",
    " told you that barbarians have entered the city. To prevent the downfall of the city you need to: ",
    " explains that the people are rising up against the taxing duke. You need to: ",
    " says the shield system for the city has been critically damaged. You need to: ",
    " sends a letter saying that Steve is burning the city down with a flint and steel. To stop this you need to:"
  ]

var objective = [
    "Fetch 3 fish from the Bay of Lakes.",
    "Kill God. (If you can't do that, do the next best thing).",
    "Clear their basement of mice.",
    "Repair their weapons systems, to ensure victory against the Flagship.",
    "Tell the Contessa that she is urgently needed to block an assasin that may or may not exist.",
    "Go kill the king of Westford.",
    "Hunt down and kill the rogue archmage fleeing through the forests to the south.",
    "Climb to the top of Frozen Peak, in order to unlock the Ice Wizard.",
    "Go mine diamonds until you have full gold armor.", 
    "Kill 39.87 goblins.",
    "Go kill an adult black dragon.",
    "Kill 14.63 kobolds."
  ]

var rewards = [ 
    "After completing, you recieve a wanted notice along with 200 gold coins for your dubious activities.",
    "After completing, you become famous through the wanted list. Many known criminals decide to help you with money and hiding. (Gain 2000 gp, but now have to hide your identity.)",
    "Completing the quest will grant you the gratitude of the quest giver, as well as the promise of hospitality should you ever come back.",
    "After completion, you have recieved a Spellguard Shield and 5 electrum pieces. ",
    "After completing the quest and/or dying, you will be awarded a posthumous medal.",
    "After finishing, you recieve a contract for your head, but get 2000 gp. ",
    "Upon completion, you find yourself shunned by the populace, but manage to steal 1000 gold pieces on your way out of town.",
    "After completing your task, the church declares holy war on you. You earn 500 gp and 1000 ep from an enemy of the church. ",
  ]

function genQuest(){
    var title = titles[Math.floor(Math.random() * titles.length)];
    var name = names[Math.floor(Math.random() * names.length)];
    var quest = quests[Math.floor(Math.random() * quests.length)];
    var obj = objective[Math.floor(Math.random() * objective.length)];
    var reward = rewards[Math.floor(Math.random() * rewards.length)];
    return title + " " + name + " " + quest + " " + obj + " " + reward;
}

// REST GENERATOR

function chooseRest(){
    var rest = Math.floor(Math.random() * 3);
    if (rest == 0){
        return " Immediately, ";
    }
    else if (rest == 1){
        return " After 3-4 hours (short rest), ";
    }
    else if (rest == 2){
        return " After a good nights sleep (long rest), ";
    }
}

// CAMPAIGN GENERATOR

function makeCampaign(){
    var encounters1 = genEnc();
    var encounters2 = genEnc();
    var encounters3 = genEnc();
    var easy1 = encounters1[0];
    var med1 = encounters1[1];
    var hard1 = encounters1[2];
    var other1 = encounters1[3];
    var easy2 = encounters2[0];
    var med2 = encounters2[1];
    var hard2 = encounters2[2];
    var other2 = encounters2[3];
    var easy3 = encounters3[0];
    var med3 = encounters3[1];
    var hard3 = encounters3[2];
    var other3 = encounters3[3];
    var quest1 = genQuest();
    var quest2 = genQuest();
    var quest3 = genQuest();

    return quest1 + chooseRest() + easy1 + chooseRest() + randEnc() + chooseRest() + med1 + "\n" + "\n" + chooseRest() + other1 + quest2 + chooseRest() + easy3 + chooseRest() + randEnc() + chooseRest() + hard1 + chooseRest() + "\n" + "\n" + other2 + quest3 + chooseRest() + randEnc() + chooseRest() + "\n" + "\n" + other3 + hard2 + "After a good nights sleep (long rest), " + hard3
}