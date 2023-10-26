import Race from './Race';

class Dwarf extends Race {
  private static instanceCount = 0;
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }
}

export default Dwarf;
