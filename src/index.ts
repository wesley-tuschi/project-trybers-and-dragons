import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('Warrior');
const player2 = new Character('Mage');
const player3 = new Character('Necromancer');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    const result = battle.fight();
    console.log(result);
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
