export interface IMemento {
    value: number;
}

export interface ICaretaker {
    values: IMemento[];
    addMemento(memento: IMemento): void;
    getMemento(index: number): IMemento;
}