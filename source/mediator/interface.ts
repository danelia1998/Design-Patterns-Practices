export interface ITrafficTower {
    airplanes: IAirplane[];
    requestPositions: () => number[];
}

export interface IAirplane {
    position: number;
    trafficTower: ITrafficTower;
}