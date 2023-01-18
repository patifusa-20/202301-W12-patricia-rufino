import { CharacterModel } from "./character.model";

export class Adviser extends CharacterModel {
    sentence = "No sé por qué, pero creo que voy a morir pronto";
    icon = "🎓";
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public role: string,
        public image: string,
        public advisedCharacter: CharacterModel
    ) {
        super(name, family, age, role, image);
        this.advisedCharacter = advisedCharacter;
    }
}
