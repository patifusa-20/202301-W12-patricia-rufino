import { CharacterTypes } from "../../types/character.type";

export function Communication({ character }: { character: CharacterTypes }) {
    return (
        <>
            <div
                className={
                    character.isTalk ? "comunications on" : "comunications"
                }
            >
                <p className="comunications__text display-1">
                    {character.sentence}
                </p>
                <img
                    className="comunications__picture"
                    src={character.image}
                    alt={character.name}
                />
            </div>
        </>
    );
}
