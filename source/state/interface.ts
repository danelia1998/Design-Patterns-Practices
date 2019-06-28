export interface IOrderStatus {
    name: string;
    nextStatus: new () => IOrderStatus;
    next: () => IOrderStatus;
}