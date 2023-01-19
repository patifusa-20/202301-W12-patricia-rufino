import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Adviser } from "../../model/adviser.model";
import { Fighter } from "../../model/fighter.model";
import { King } from "../../model/king.model";
import { Squire } from "../../model/squire.model";
import { Character } from "./character";

describe('Given "Character" component', () => {
    const mockKing = new King(
        "Test King",
        "Test family",
        40,
        "Test role",
        "Test image",
        5
    );
    mockKing.id = "30";
    const mockFighter = new Fighter(
        "Test Fighter",
        "Test family",
        40,
        "Test role",
        "Test image",
        "Test weapon",
        8
    );
    mockFighter.id = "31";
    const mockAdviser = new Adviser(
        "Test Adviser",
        "Test family",
        40,
        "Test role",
        "Test image",
        mockKing
    );
    mockAdviser.id = "32";
    const mockSquire = new Squire(
        "Test Squire",
        "Test family",
        40,
        "Test role",
        "Test image",
        mockFighter,
        8
    );
    mockSquire.id = "33";
    describe("When data are provided in the component", () => {
        test("Then King data is rendered on screen", async () => {
            render(<Character character={mockKing}></Character>);

            const elements = screen.getByText(/5/i);
            expect(elements).toBeInTheDocument();
        });
        test("Then Fighter data is rendered on screen", async () => {
            render(<Character character={mockFighter}></Character>);

            const elements = screen.getByText(/test weapon/i);
            expect(elements).toBeInTheDocument();
        });
        test("Then Adviser data is rendered on screen", async () => {
            render(<Character character={mockAdviser}></Character>);

            const elements = screen.getByText(/test adviser/i);
            expect(elements).toBeInTheDocument();
        });
        test("Then Squire data is rendered on screen", async () => {
            render(<Character character={mockSquire}></Character>);

            const elements = screen.getByText(/test squire/i);
            expect(elements).toBeInTheDocument();
        });
    });
    describe("When a character is not alive", () => {
        test("Then className on exist", async () => {
            mockSquire.isAlive = false;
            render(<Character character={mockSquire}></Character>);
            const iconThumbs = screen.getByTestId("thumb-icon");
            expect(iconThumbs).toHaveClass("fa-thumbs-down");
        });
    });
});
