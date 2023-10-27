import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _instanceCount = 0;
  private _sourcePower: EnergyType;

  constructor(name: string) {
    super(name);
    this._sourcePower = 'mana';
    Mage._instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this._sourcePower;
  }

  static createdArchetypeInstances(): number {
    return Mage._instanceCount;
  }
}

export default Mage;
