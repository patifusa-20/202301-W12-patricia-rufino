import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
    CharacterContext,
    CharacterContextStructure,
} from "../../context/character.context";
import { King } from "../../model/king.model";
import { Buttons } from "./buttons";

describe('Given "Buttons" component in "Character" feature', () => {
    const handleTalk = jest.fn();
    const handleDie = jest.fn();
    const mockCharacter = new King(
        "Test King",
        "Test family",
        40,
        "Test role",
        "Test image",
        5
    );

    const mockContext = {
        handleTalk,
        handleDie,
    } as unknown as CharacterContextStructure;

    beforeEach(() => {
        render(
            <CharacterContext.Provider value={mockContext}>
                <Buttons character={mockCharacter}></Buttons>
            </CharacterContext.Provider>
        );
    });

    describe("When component is call with a DOM implementation", () => {
        test("Then if a user interact with Habla button, a function is called", async () => {
            const elementButton = await screen.findAllByRole("button");
            await userEvent.click(elementButton[0]);
            expect(handleTalk).toHaveBeenCalled();
        });
        test("Then if a user interact with Muere button, a function is called", async () => {
            const elementButton = await screen.findAllByRole("button");
            await userEvent.click(elementButton[1]);
            expect(handleDie).toHaveBeenCalled();
        });
    });
});
