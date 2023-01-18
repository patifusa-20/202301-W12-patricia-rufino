import { createContext } from "react";
import { Character } from "../model/character.model";
import { CharacterTypes } from "../types/character.type";

export type CharacterContextStructure = {
    item: CharacterTypes;
    characters: Array<CharacterTypes>;
    handleLoad: () => Promise<void>;
    handleTalk: (character: CharacterTypes) => Promise<void>;
    handleDie: (character: CharacterTypes) => Promise<void>;
};

//Es importante tipar el valor inicial para que el contexto sepa de qué se trata
// Normalmente el contexto se utiliza creando un componente que proveerá el contexto al resto de componentes.
const initialContext: CharacterContextStructure = {
    item: new Character("", "", 1, "", ""),
    characters: [],
    handleLoad: async () => {
        //
    },
    handleTalk: async (character: CharacterTypes) => {
        //
    },
    handleDie: async (character: CharacterTypes) => {
        //
    },
};

export const CharacterContext = createContext(initialContext);