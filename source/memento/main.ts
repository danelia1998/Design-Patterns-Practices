import {
    originator,
    Caretaker
} from "./index"

console.log(originator.store(10));
let restoreMemento = originator.restore(originator.store(10));

console.log(restoreMemento);

let caretaker = new Caretaker();
caretaker.addMemento(originator.store(10));
console.log(caretaker.getMemento(0));
