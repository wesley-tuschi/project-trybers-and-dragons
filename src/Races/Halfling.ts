import Race from './Race';

class Halfling extends Race {
  private static instanceCount = 0;
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }
}

export default Halfling;
