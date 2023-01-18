import { useCharacters } from "../hooks/use.characters";
import { CharacterContext } from "./character.context";

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { item, characters, handleLoad, handleTalk, handleDie } =
        useCharacters();

    const context = {
        item,
        characters,
        handleLoad,
        handleTalk,
        handleDie,
    };

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
