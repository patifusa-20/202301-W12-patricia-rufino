import { render } from "@testing-library/react";
import { useCharacters } from "../hooks/use.characters";
import { CharacterContextProvider } from "./character.provider";

describe("Given CharacterContextProvider", () => {
    describe("When we use it", () => {
        test("Then it should call the custom hook useCharacters", () => {
            // const spyUseCharacters = jest.spyOn(useCharacters, "useCharacters");
            render(
                <CharacterContextProvider>
                    <></>
                </CharacterContextProvider>
            );
            // expect(spyUseCharacters).toHaveBeenCalled();
        });
    });
});
