import { Characters } from "../../components/characters/characters";
import { CharacterTypes } from "../../types/character.type";

export function HomePage({
    characters,
}: {
    characters: Array<CharacterTypes>;
}) {
    return (
        <>
            <h1>Challenge Week 12</h1>
            <Characters characters={characters}></Characters>
        </>
    );
}
