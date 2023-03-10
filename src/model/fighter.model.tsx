import { CharacterModel } from "./character.model";

export class Fighter extends CharacterModel {
    sentence = "Primero pego y luego pregunto";
    icon = "🗡️";
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
