export interface JediInterface {
    level: number,
    attackWithSaber(): number
}

export interface AdapterInterface {
    jedi: JediInterface,
    attack(): number
}

export interface SoldierInterface {
    level: number,
    attack(): number
}