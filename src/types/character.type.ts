import { CharacterModel } from "../model/character.model";

export type CharacterTypes = {
    id: string;
    name: string;
    family: string;
    age: number;
    role: string;
    isAlive: boolean;
    isTalk: boolean;
    image: string;
    icon?: string;
    sentence?: string;
    years?: number;
    weapon?: string;
    skill?: number;
    advisedCharacter?: CharacterModel; //las propiedades pueden apuntar a otras clases
    greasy?: number;
};

export type UseCharactersType = {
    item: CharacterTypes;
    characters: Array<CharacterTypes>;
    handleLoad: () => Promise<void>;
    handleTalk: (character: CharacterTypes) => Promise<void>;
    handleDie: (character: CharacterTypes) => Promise<void>;
};
