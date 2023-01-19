import { render, screen, waitFor, act } from "@testing-library/react";
import {
    CharacterContext,
    CharacterContextStructure,
} from "../../context/character.context";
import { King } from "../../model/king.model";
import { Characters } from "./characters";

const mockCharacters = [
    new King("Test King", "Test family", 40, "Test role", "Test image", 5),
];

describe('Given "Characters" component', () => {
    const handleLoad = jest.fn();
    let mockContext: CharacterContextStructure;

    describe("When it load the data from characters", () => {
        beforeEach(async () => {
            mockContext = {
                characters: mockCharacters,
                handleLoad,
            } as unknown as CharacterContextStructure;
            await act(async () => {
                render(
                    <CharacterContext.Provider value={mockContext}>
                        <Characters></Characters>
                    </CharacterContext.Provider>
                );
            });
        });
        test(`Then it should be render the data`, async () => {
            const elementList = await screen.findAllByRole("list"); // <ul />
            expect(elementList[0]).toBeInTheDocument();
            await waitFor(() => {
                expect(handleLoad).toHaveBeenCalled();
            });
            const elementItem = await screen.findByText(/Test King/i);
            expect(elementItem).toBeInTheDocument();
        });
    });
});
