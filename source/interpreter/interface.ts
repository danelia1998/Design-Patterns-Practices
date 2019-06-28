export interface INum {
    val: number;
    interpret(): number;
}

export interface IInterprete {
    left: INum;
    right: INum;
    interpret(): number;
}