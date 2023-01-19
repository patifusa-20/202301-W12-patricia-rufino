import { useEffect, useContext } from "react";
import { CharacterContext } from "../../context/character.context";
import { Character } from "../character/character";

export function Characters() {
    const { characters, handleLoad } = useContext(CharacterContext);

    useEffect(() => {
        handleLoad();
    }, [characters]);

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
        </>
    );
}
