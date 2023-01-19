import { createContext } from "react";
import { CharacterModel } from "../model/character.model";
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
export const initialContext: CharacterContextStructure = {
    item: new CharacterModel("", "", 1, "", ""),
    characters: [],
    handleLoad: async () => {
        //
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleTalk: async (character: CharacterTypes) => {
        //
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleDie: async (character: CharacterTypes) => {
        //
    },
};

export const CharacterContext = createContext(initialContext);
