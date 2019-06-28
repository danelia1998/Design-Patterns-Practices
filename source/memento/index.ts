import { IMemento } from "./interface"

class Memento implements IMemento {
    constructor(public value: number = value) { }
}

const originator = {
    store: function (val: number) {
        return new Memento(val);
    },
    restore: function (memento: { value: number; }) {
        return memento.value;
    }
};

class Caretaker {
    private values: Memento[];

    constructor() {
        this.values = [];
    }

    addMemento(memento: IMemento) {
        this.values.push(memento);
    }

    getMemento(index: number) {
        return this.values[index];
    }
}

export {
    originator,
    Caretaker
};