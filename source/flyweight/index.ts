import { IColor, color } from "./interface"

class Color implements color {
    constructor(public name: string) { }
}

class colorFactory {
    colors = {} as IColor;
    constructor(public name: color) {
        
    }
    create(name: string) {
        let color = this.colors[name];
        if (color) return color;
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    colorFactory
};

