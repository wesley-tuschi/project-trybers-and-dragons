import Race from './Race';

class Orc extends Race {
  private static instanceCount = 0;
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }
}

export default Orc;
