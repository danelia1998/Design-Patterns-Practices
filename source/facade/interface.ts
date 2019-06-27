export interface DiscountInterface {
    calc(value: number): number;
}

export interface ShippingInterface {
    calc(): number;
}

export interface FeesInterface {
    calc(value: number): number;
}