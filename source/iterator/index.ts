class Iterator<T> {
    index: number;
    elements: T[];

    constructor(el: T[]) {
        this.index = 0;
        this.elements = el;
    }

    next(): T {
        return this.elements[this.index++];
    }

    hasNext(): boolean {
        return this.index < this.elements.length;
    }
}

export default Iterator;