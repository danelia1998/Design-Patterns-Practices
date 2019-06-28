import { ITrafficTower, IAirplane } from "./interface"

class TrafficTower implements ITrafficTower{
    airplanes: IAirplane[];
    constructor() {
        this.airplanes = [];
     }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane implements IAirplane {


    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane
};