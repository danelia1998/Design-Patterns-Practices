import { DiscountInterface, ShippingInterface, FeesInterface } from "./interface"

class ShopFacade {
    discount: DiscountInterface;
    shipping: ShippingInterface;
    fees: FeesInterface;
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount implements DiscountInterface {
    calc(value: number) {
        return value * 0.9;
    }
}

class Shipping implements ShippingInterface {
    calc() {
        return 5;
    }
}

class Fees implements FeesInterface {
    calc(value: number) {
        return value * 1.05;
    }
}

export default ShopFacade;