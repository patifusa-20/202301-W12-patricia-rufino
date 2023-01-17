import { Communication } from "../../components/character.communication/communication";
import { Characters } from "../../components/characters/characters";
import { CharacterTypes } from "../../types/character.type";

export function HomePage({
    character,
    characters,
    handleTalk,
    handleDie,
}: {
    character: CharacterTypes;
    characters: Array<CharacterTypes>;
    handleTalk: (item: CharacterTypes) => void;
    handleDie: (item: CharacterTypes) => void;
}) {
    return (
        <>
            <h1>Challenge Week 12</h1>
            <Characters
                characters={characters}
                handleTalk={handleTalk}
                handleDie={handleDie}
            ></Characters>
            <Communication character={character}></Communication>
        </>
    );
}
