import { Character } from "./character.model";

export class King extends Character {
    sentence = "Vais a morir todos";
    icon = "👑";
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public years: number
    ) {
        super(name, family, age, role, image);
    }
}
