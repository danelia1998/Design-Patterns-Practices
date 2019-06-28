import { StrategyType, IShoppingCart } from "./interface"

class ShoppingCart implements IShoppingCart{
    discount: StrategyType;
    amount: number;

    constructor(discount: StrategyType) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount: number) {
        this.amount = amount;
    }
}

function guestStrategy(amount: number) {
    return amount;
}

function regularStrategy(amount: number) {
    return amount * 0.9;
}

function premiumStrategy(amount: number) {
    return amount * 0.8;
}

export {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy
};