import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _instanceCount = 0;
  private _sourcePower: EnergyType;

  constructor(name: string) {
    super(name);
    this._sourcePower = 'stamina';
    Ranger._instanceCount += 1;
  }

  get energyType(): EnergyType {
    return this._sourcePower;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instanceCount;
  }
}

export default Ranger;
