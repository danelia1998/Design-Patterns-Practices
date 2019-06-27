import { SheepInterface, Cloning } from "./interface";

class Sheep implements SheepInterface, Cloning {

    constructor(public name: string, public weight: number) { }
    public clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;