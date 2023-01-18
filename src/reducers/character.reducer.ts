import { CharacterTypes } from "../types/character.type";
import { CharacterAction } from "./action.creators";
import { characterActionTypes } from "./action.types";

export function characterReducer(
    state: Array<CharacterTypes>,
    action: CharacterAction
): Array<CharacterTypes> {
    switch (action.type) {
        case characterActionTypes.load:
            return action.payload as Array<CharacterTypes>;

        case characterActionTypes.talk:
            return state.map((item) =>
                item.id === (action.payload as CharacterTypes).id
                    ? { ...item, ...(action.payload as CharacterTypes) }
                    : item
            );

        case characterActionTypes.die:
            return state.map((item) =>
                item.id === (action.payload as CharacterTypes).id
                    ? (action.payload as CharacterTypes)
                    : item
            );

        default:
            return [...state];
    }
}
