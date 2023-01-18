import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Fighter } from "../model/fighter.model";
import {
    mockKing,
    mockFighter,
    mockTalkFighter,
    mockCharacters,
} from "./mock.use.characters";

import { useCharacters } from "./use.characters";

describe(`Given useCharacters (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    beforeEach(() => {
        TestComponent = () => {
            const { handleLoad, handleTalk, handleDie } = useCharacters();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                    <button
                        onClick={() => handleTalk(mockTalkFighter as Fighter)}
                    >
                        Talk
                    </button>
                    <button onClick={() => handleDie(mockKing)}>Die</button>
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
    describe(`When the component is rendered OK`, () => {
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
        test("Then its function handleTalk should be add Characters to the state", async () => {
            const buttons = screen.getAllByRole("button");

            expect(await screen.findByText(/Talk/i)).toBeInTheDocument();
            userEvent.click(buttons[1]);
        });
        test("Then its function handleDie should be Talk Characters to the state", async () => {
            const buttons = screen.getAllByRole("button");
            expect(await screen.findByText(/Die/i)).toBeInTheDocument();
            act(() => {
                userEvent.click(buttons[2]);
            });
        });
    });
});
