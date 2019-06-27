import { IPrinter, InkType, InkInterface } from "./interface";

class Printer implements IPrinter {
    constructor(public ink: InkInterface) { }
}

class EpsonPrinter extends Printer {
    constructor(ink: InkInterface) {
        super(ink);
    }

    print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

class HPprinter extends Printer {
    constructor(ink: InkInterface) {
        super(ink);
    }

    print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

class Ink implements InkInterface {
    constructor(public type: InkType) { }

    get() {
        return this.type;
    }
}

class AcrylicInk extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk
};