import { CharacterTypes } from "../../types/character.type";
import { Character } from "../character/character";

export function Characters({
    characters,
    handleTalk,
    handleDie,
}: {
    characters: Array<CharacterTypes>;
    handleTalk: (item: CharacterTypes) => void;
    handleDie: (item: CharacterTypes) => void;
}) {
    return (
        <>
            <div className="app container">
                <ul className="characters-list row list-unstyled">
                    {characters.map((item) => {
                        return (
                            <Character
                                key={item.id}
                                character={item}
                                handleTalk={handleTalk}
                                handleDie={handleDie}
                            ></Character>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
