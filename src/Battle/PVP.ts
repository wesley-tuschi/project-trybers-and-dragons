import Battle from './Battle';
import Fighter from '../Fighter';

function isPlayerDefeated(player: Fighter): boolean {
  return player.lifePoints === -1;
}

function performAttack(attacker: Fighter, defender: Fighter): void {
  attacker.attack(defender);
}

class PVP extends Battle {
  private player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  private roundOfFight(): number {
    performAttack(this.player, this.player2);
    if (isPlayerDefeated(this.player2)) {
      return 1;
    }

    performAttack(this.player2, this.player);
    if (isPlayerDefeated(this.player)) {
      return -1;
    }

    return 0;
  }

  fight(): number {
    let result = 0;
    while (!isPlayerDefeated(this.player) && !isPlayerDefeated(this.player2)) {
      result = this.roundOfFight();
      if (result !== 0) {
        break;
      }
    }
    return result;
  }
}

export default PVP;
