import { Character } from "./character.model";

export class Adviser extends Character {
    sentence = "No sé por qué, pero creo que voy a morir pronto";
    icon = "🎓";
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public advisedCharacter: Character
    ) {
        super(name, family, age, role, image);
        this.advisedCharacter = advisedCharacter;
    }
}
