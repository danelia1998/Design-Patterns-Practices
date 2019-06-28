export type StrategyType = (amount: number) => number;

export interface IShoppingCart {
    discount: StrategyType;
    amount: number;
    checkout(): number;
    setAmount(amount: number): void;
}