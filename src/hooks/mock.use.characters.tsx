import { Fighter } from "../model/fighter.model";
import { King } from "../model/king.model";

export const mockKing = new King("Test King", "image", 4, "5", "Prueba", 3);
mockKing.id = "000001";
export const mockFighter = new Fighter(
    "Test Fighter",
    "image",
    5,
    "5",
    "Prueba",
    "test",
    8
);
mockFighter.id = "000002";

export const mockCharacters = [mockKing, mockFighter];

export const mockUpdateFighter = { ...mockFighter, name: "Updated name" };
