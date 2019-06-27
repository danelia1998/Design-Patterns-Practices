import { SoldierInterface, JediInterface, AdapterInterface } from "./interface";

class Soldier implements SoldierInterface {

    constructor(public level: number) {
    }

    attack() {
        return this.level * 1;
    }
}

class Jedi implements JediInterface {

    constructor(public level: number) {
    }

    attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements AdapterInterface {

    constructor(public jedi: JediInterface) {
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter
};