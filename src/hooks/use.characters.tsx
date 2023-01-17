import { useCallback, useState } from "react";
import { charactersData } from "../data/characters.data";
import { CharacterTypes } from "../types/character.type";

export function useCharacters() {
    const initialState: Array<CharacterTypes> = charactersData;

    const [characters, setCharacters] = useState(initialState);

    const handleLoad = useCallback(async () => {
        setCharacters(await characters);
    }, []);
    const handleTalk = async function (character: CharacterTypes) {
        setCharacters(
            characters.map((item) =>
                item.id === character.id ? { ...item, ...character } : item
            )
        );
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
        characters,
        handleLoad,
        handleTalk,
        handleDie,
    };
}
