import { Characters } from "../../components/characters/characters";
import { CharacterTypes } from "../../types/character.type";

export function HomePage({
    characters,
}: {
    characters: Array<CharacterTypes>;
}) {
    return (
        <>
            <h2>Home</h2>
            <Characters characters={characters}></Characters>
        </>
    );
}
