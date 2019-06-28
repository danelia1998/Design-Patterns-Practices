import { INum, IInterprete } from "./interface"

class Sum implements IInterprete {
    constructor(public left: INum = left, public right: INum = right) { }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

class Min implements IInterprete {
    constructor(public left: INum = left, public right: INum = right) { }

    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}

class Num implements INum {
    constructor(public val: number = val) { }

    interpret() {
        return this.val;
    }
}

export {
    Num,
    Min,
    Sum
};