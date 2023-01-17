import { useCallback, useState } from "react";
import { charactersData } from "../data/characters.data";
import { CharacterTypes } from "../types/character.type";

export function useCharacters() {
    const initialState: Array<CharacterTypes> = charactersData;

    const [characters, setCharacters] = useState(initialState);

    const handleLoad = useCallback(async () => {
        setCharacters(await characters);
    }, []);
    const handleUpdate = async function (character: Partial<CharacterTypes>) {
        setCharacters(
            characters.map((item) =>
                item.id === character.id ? { ...item, ...character } : item
            )
        );
    };

    const handleDelete = async function (id: CharacterTypes["id"]) {
        setCharacters(characters.filter((item) => item.id !== id));
    };

    return {
        characters,
        handleLoad,
        handleUpdate,
        handleDelete,
    };
}
