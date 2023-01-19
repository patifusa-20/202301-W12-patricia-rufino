import { render } from "@testing-library/react";
import { CharacterContextProvider } from "./character.provider";

describe("Given CharacterContextProvider", () => {
    describe("When we use it", () => {
        test("Then it should call the custom hook useCharacters", () => {
            render(
                <CharacterContextProvider>
                    <></>
                </CharacterContextProvider>
            );
        });
    });
});
