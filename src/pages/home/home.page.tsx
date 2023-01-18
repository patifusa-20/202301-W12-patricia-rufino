import { Communication } from "../../components/character.communication/communication";
import { Characters } from "../../components/characters/characters";
import { CharacterTypes } from "../../types/character.type";

export function HomePage() {
    return (
        <>
            <h1>Challenge Week 12</h1>
            <Characters></Characters>
            <Communication></Communication>
        </>
    );
}
