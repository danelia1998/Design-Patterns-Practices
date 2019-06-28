import { ICockpit, Iturbine, ICommand } from "./interface"

class Cockpit implements ICockpit {
    constructor(public command: ICommand = command) { }

    execute() {
        this.command.execute();
    }
}

class Turbine implements Iturbine {
    constructor(public state = false) { }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnCommand implements ICommand {
    constructor(public turbine: Iturbine = turbine) { }

    execute() {
        this.turbine.on();
    }
}

class OffCommand implements ICommand {
    constructor(public turbine: Iturbine = turbine) { }

    execute() {
        this.turbine.off();
    }
}

export {
    Cockpit,
    Turbine,
    OnCommand,
    OffCommand
};