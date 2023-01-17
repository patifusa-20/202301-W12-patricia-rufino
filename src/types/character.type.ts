import { Character } from "../model/character.model";

export type CharacterTypes = {
    id: string;
    name: string;
    family: string;
    age: number;
    role: string;
    isAlive: boolean;
    image: string;
    icon?: string;
    sentence?: string;
    years?: number;
    weapon?: string;
    skill?: number;
    advisedCharacter?: Character; //las propiedades pueden apuntar a otras clases
    greasy?: number;
    me: () => string;
};
