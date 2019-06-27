import { DriverInterface } from "./interface"

class Car {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor(public driver: DriverInterface) { }
    drive(): string {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

class Driver implements DriverInterface {
    constructor(public age: number) { }
}

export {
    Car,
    CarProxy,
    Driver
};