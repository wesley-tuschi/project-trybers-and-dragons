import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints - attackPoints;
  }

  attack(enemy: SimpleFighter): void {
    const damage = this._strength;

    enemy.receiveDamage(damage);
  }
}

export default Monster;
