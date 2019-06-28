import { IProduct, IActions, ActionsProduct } from "./interface"

class Product implements IProduct{
    price: number;
    actions: IActions[];
    constructor() {
        this.price = 0;
        this.actions = [];
    }

    setBasePrice(val: number) {
        this.price = val;
        this.notifyAll();
    }

    register(observer: IActions) {
        this.actions.push(observer);
    }

    unregister(observer: ActionsProduct) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }

    notifyAll() {
        return this.actions.forEach(el => el.update(this));
    }
}

class Fees implements IActions {
    update(product: Product) {
        product.price = product.price * 1.2;
    }
}

class Proft implements IActions {
    update(product: Product) {
        product.price = product.price * 2;
    }
}

export {
    Product,
    Fees,
    Proft
};