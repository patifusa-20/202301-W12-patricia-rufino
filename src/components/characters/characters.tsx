import { CharacterTypes } from "../../types/character.type";
import { Character } from "../character/character";

export function Characters({
    characters,
}: {
    characters: Array<CharacterTypes>;
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
                            ></Character>
                        );
                    })}
                </ul>
            </div>
            <div className="comunications">
                <p className="comunications__text display-1"></p>
                <img className="comunications__picture" src="" alt="" />
            </div>
        </>
    );
}
