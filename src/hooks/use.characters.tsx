import { useCallback, useState } from "react";
import { charactersData } from "../data/characters.data";
import { Character } from "../model/character.model";
import { CharacterTypes } from "../types/character.type";

export function useCharacters() {
    const initialState: Array<CharacterTypes> = charactersData;

    const [characters, setCharacters] = useState(initialState);
    const prevState: CharacterTypes = new Character("", "", 1, "", "");
    const [item, setItem] = useState(prevState);

    const handleLoad = useCallback(async () => {
        setCharacters(await characters);
    }, []);

    const closeCommunication = (characterItem: CharacterTypes) => {
        characterItem.isTalk = false;
        setCharacters(
            characters.map((item) =>
                item.id === characterItem.id
                    ? { ...item, ...characterItem }
                    : item
            )
        );
        setItem(characterItem);
    };
    const handleTalk = async function (character: CharacterTypes) {
        character.isTalk = true;
        setCharacters(
            characters.map((item) =>
                item.id === character.id ? { ...item, ...character } : item
            )
        );
        setItem(character);
        setTimeout(() => {
            closeCommunication(character);
        }, 3000);
    };

    const handleDie = async function (character: CharacterTypes) {
        character.isAlive = false;
        setCharacters(
            characters.map((item) =>
                item.id === character.id ? { ...item, ...character } : item
            )
        );
    };

    return {
        item,
        characters,
        handleLoad,
        handleTalk,
        handleDie,
    };
}
