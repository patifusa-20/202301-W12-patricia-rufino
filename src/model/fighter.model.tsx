import { Character } from "./character.model";

export class Fighter extends Character {
    sentence = "Primero pego y luego pregunto";
    icon = "&#x1F5E1;";
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public weapon: string,
        public skill: number
    ) {
        super(name, family, age, role, image);
    }
}
