import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

class Warrior extends Archetype {
    private static _instanceCount = 0;
    private _sourcePower: EnergyType;

    constructor(name: string) {
        super(name);
        this._sourcePower = 'stamina';
        Warrior._instanceCount += 1;
    }

    get energyType(): EnergyType {
        return this._sourcePower;
    }

    static createdArchetypeInstances(): number {
        return Warrior._instanceCount;
    }

}

export default Warrior;
