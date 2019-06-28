import { Product } from "./index"

export type ActionsProduct = (product: Product) => void;

export interface IActions {
    update: ActionsProduct;
}

export interface IProduct {
    price: number;
    actions: IActions[];
    setBasePrice(val: number): void;
    register(observer: IActions): void;
    unregister(observer: ActionsProduct): void;
    notifyAll(): void;
}