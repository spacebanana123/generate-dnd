Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

Object.prototype.random = function () {
    var keys = Object.keys(this);
    return keys[ keys.length * Math.random() << 0];
};

var traps = [
    "You enter a long, dark corridor, lights flicker on and off throughout. (There are 2 pressure plates at the end of each corridor. A successful DC 16 Perception check will reveal the pressure plates. If stepped on roll a 1d4 for the outcome. 1. release 2 GHOULS into the corridor and seal the doors. The doors will unlock if both ghouls have been slain. 2. release a HYDRA into the corridor and expand the walls, the doors seal for this trap as well. 3. A BONE DEVIL enters the passage, both doors seal, the doors will unseal after the BONE DEVIL is defeated. 4. An ANDROSPHINX enters the corridor, both doors seal.) All doors unseal after the enemies are defeated. Beyond the passage is a RING OF FEATHER FALLING and 50 gp.",
    "You enter a large, square room, with a high ceiling and a large amount of wires stretching accross every inch of the room, all leading to some weapon. You track one back to a crossbow, which happens to be pointed directly at you. The obvious exit seems to be an open doorway on the opposite side of the room, but just as you back up to take a moment to plan, the door slams shut behind you and knocks you off your feet. If a party members trips a wire, and the whole room explodes with action. Everybody must roll a DC 22 Dexterity saving throw, taking 6d6 piercing damage on a failed save, and 3d6 on a successful saving throw. Additonally, all creatures in the room must make a DC 18 Wisdom saving throw or be frightened, at which point the doors behind you swing open, allowing your escape. If the party makes it to the other side (They trigger the traps again), they are rewarded with a continuation of the dungeon.",
    "The party sees a locked treasure chest ahead, sitting alone in a massive cavern dominated by glowing fungi. (Before attempting to defuse the trap, players must make a 19 Perception check, if players succeed they are rewarded with 25 gp. If they fail, the treasure is destroyed and they take 3d6+3 poison damage.)",
    "When the party enters the dungeon, they are compelled to bring a light source with them. The dungeon is unnaturally dark and silent. after 3 minutes have passed,  party will begin to hear whispers and faint voices screaming. The entire dungeon will have an aura of malevolence. After another 3 minutes, if the party does not turn back the shadows will become more absolute. The noises will begin to gain strenght and ferocity. After 2 more minutes, the shadows will begin their attack. The light source will be extinguished and any player who is outside a 10 foot radius of the player with the light will disapear into the shadows. The player holding the lantern must make a 17 Dexterity check to relight the lantethern. Every time a player fails to relight the lantern, another party member will be taken by the shadows. Once the light has been restored, the shadows will retreat for 12 hours. The missing players will be found sleeping with no recollection of what has occured at the end of the dungeon. The final boss of the dungeon is an Archmage which has summoned the shadows. Once the Archmage has been defeated, the missing players will return and the shadows will be gone forever.",
    "The party enters a wide cave with abundant flora and fauna. If the party moves to rest in the grove, the grove will seem to awaken and attack. There are 5 Treants and 12 Shambling Mounds hidden nearby. You can sell the wood that the Treants are made of if you did not use fire during the fight. You can get 5 sp per Treant."
  ]

function genTrap() {
    var trap = traps[Math.floor(Math.random() * traps.length)];
    return trap;
}