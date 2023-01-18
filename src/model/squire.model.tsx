import { CharacterModel } from "./character.model";

export class Squire extends CharacterModel {
    sentence = "Soy un loser";
    icon = "🛡️";
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public advisedCharacter: CharacterModel,
        public greasy: number
    ) {
        super(name, family, age, role, image);
        this.advisedCharacter = advisedCharacter;
        this.greasy = greasy;
    }
}
