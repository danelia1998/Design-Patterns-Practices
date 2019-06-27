import { shipModel, Droid } from './interface'


function droidProducer(kind: shipModel) {
    if (kind === 'battle') {
        return battleDroidFactory();
    }
    return pilotDroidFactory();
}


function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

class B1 implements Droid {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements Droid {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;
