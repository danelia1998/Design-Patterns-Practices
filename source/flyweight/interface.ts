export type color = {
    name: string;
}
export interface IColor {
    [color: string]: color;
}