import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
    mockKing,
    mockFighter,
    mockUpdateFighter,
    mockCharacters,
} from "./mock.use.characters";

import { useCharacters } from "./use.characters";

describe(`Given useCharacters (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    beforeEach(() => {
        TestComponent = () => {
            const { handleLoad, handleUpdate, handleDelete } = useCharacters();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                    <button onClick={() => handleUpdate(mockUpdateFighter)}>
                        Update
                    </button>
                    <button onClick={() => handleDelete(mockKing.id)}>
                        Delete
                    </button>
                    <div>
                        <p>Loaded</p>
                        <ul>
                            {mockCharacters.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        };
        act(() => {
            render(<TestComponent />);
        });
    });
    describe(`When the repo is working OK`, () => {
        test("Then its function handleLoad should be add characters to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/loaded/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[0]);
            });

            expect(await screen.findByText(mockKing.name)).toBeInTheDocument();
            expect(
                await screen.findByText(mockFighter.name)
            ).toBeInTheDocument();
        });
        test("Then its function handleUpdate should be add Characters to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/update/i)).toBeInTheDocument();
            userEvent.click(buttons[1]);
        });
        test("Then its function handleDelete should be update Characters to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/delete/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[2]);
            });
        });
    });
});
