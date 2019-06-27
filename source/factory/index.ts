import {BmwInterface,BmwModel} from './interface'


class BmwFactory {
    static create(type: BmwModel)  {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw implements BmwInterface{
    constructor(public model: BmwModel,public price: number,public maxSpeed: number) {}
}

export default BmwFactory;
