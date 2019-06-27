import { PastaInterface } from "./interface"

class Pasta implements PastaInterface {
    price: number;
    constructor() {
        this.price = 0;
    }
    getPrice() {
        return this.price;
    }
}

class Penne extends Pasta {
    constructor() {
        super();
        this.price = 8;
    }
}

class PastaDecorator extends Pasta {
    constructor(public pasta: PastaInterface) {
        super();
    }

    getPrice() {
        return this.pasta.getPrice();
    }
}

class SauceDecorator extends PastaDecorator {
    constructor(pasta: PastaInterface) {
        super(pasta);
    }

    getPrice() {
        return super.getPrice() + 5;
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(pasta: PastaInterface) {
        super(pasta);
    }

    getPrice() {
        return super.getPrice() + 3;
    }
}

export {
    Penne,
    SauceDecorator,
    CheeseDecorator
};