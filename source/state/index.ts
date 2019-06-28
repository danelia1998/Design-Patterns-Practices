import { IOrderStatus } from "./interface"

class OrderStatus {
    constructor(public name: string, public nextStatus: new () => IOrderStatus) { }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor(public state: IOrderStatus = new WaitingForPayment()) { }

    nextState() {
        this.state = this.state.next();
    };
}

export default Order;