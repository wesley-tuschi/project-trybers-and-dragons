import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[] | Fighter[];

  constructor(
    private _player: Fighter = new Character('player'),
    monsters: Array<SimpleFighter | Fighter>,
  ) {
    super(_player);
    const monster: SimpleFighter = new Monster();
    this._monsters = monsters;
    this._monsters.push(monster);
  }

  private duel(round: number, enemy: SimpleFighter): number {
    if (this.player.lifePoints <= 0) {
      return round;
    }

    enemy.receiveDamage(this.player.strength);
    this.player.receiveDamage(enemy.strength);

    return round - 1;
  }

  private engageEnemy(enemy: SimpleFighter): boolean {
    let round = 10;
    while (round > 0 && this.player.lifePoints > 0 && enemy.lifePoints > 0) {
      round = this.duel(round, enemy);
    }
    return this.player.lifePoints > 0;
  }

  public fight(): number {
    const allEnemiesDefeated = this._monsters.every((enemy) =>
      this.engageEnemy(enemy));
    return allEnemiesDefeated ? 1 : -1;
  }
}
