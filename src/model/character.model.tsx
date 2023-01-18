import { CharacterTypes } from "../types/character.type";

export class CharacterModel implements CharacterTypes {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ("000000" + aNumbers[0]).slice(-6);
    }
    id: string;
    isAlive: boolean;
    isTalk: boolean;
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string
    ) {
        this.isAlive = true;
        this.isTalk = false;
        this.id = CharacterModel.generateId();
    }
}
