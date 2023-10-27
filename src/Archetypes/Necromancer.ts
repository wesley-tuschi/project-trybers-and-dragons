import Archetype from "./Archetype";
import { EnergyType } from "../Energy";

class Necromancer extends Archetype {
    private static _instanceCount = 0;
    private _sourcePower: EnergyType;

    constructor(name: string) {
        super(name);
        this._sourcePower = 'mana';
        Necromancer._instanceCount += 1;
    }

    get energyType(): EnergyType {
        return this._sourcePower;
    }

    static createdArchetypeInstances(): number {
        return Necromancer._instanceCount;
    }

}

export default Necromancer;
