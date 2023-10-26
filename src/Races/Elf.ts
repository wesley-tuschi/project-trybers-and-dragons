import Race from './Race';

class Elf extends Race {
  private static instanceCount = 0;
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instanceCount;
  }
}

export default Elf;
