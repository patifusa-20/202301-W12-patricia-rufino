import { render, screen } from "@testing-library/react";
import { useContext } from "react";
import { CharacterTypes } from "../types/character.type";

// Se importa directamente el initialContext
// para que el test utilice las funciones definidas en él
import { initialContext, CharacterContext } from "./character.context";

const mockCharacter: CharacterTypes = {
    id: "1",
    name: "Test Character",
    family: "Test family",
    age: 40,
    role: "Test role",
    image: "Test image",
    isAlive: true,
    isTalk: false,
};

initialContext.characters = [mockCharacter];

describe("Given the context CharacterContext", () => {
    let TestComponent: () => JSX.Element;
    describe("When a Test Component is wrapper with this context", () => {
        beforeEach(() => {
            TestComponent = () => {
                const { characters, handleLoad, handleTalk, handleDie } =
                    useContext(CharacterContext);
                handleLoad();
                handleTalk(mockCharacter);
                handleDie(mockCharacter);
                return <>{characters[0].name}</>;
            };
        });
        test("Context values should be used in the component", () => {
            render(
                <CharacterContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </CharacterContext.Provider>
            );
            const element = screen.getByText(initialContext.characters[0].name);
            expect(element).toBeInTheDocument();
        });
    });
});
