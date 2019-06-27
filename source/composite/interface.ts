export interface InterfaceEQ {
    price: number;
    name: string;
    getPrice(): number;
    getName(): string;
    setName(name: string): void;
}