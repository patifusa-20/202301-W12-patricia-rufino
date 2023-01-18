import { CharacterTypes } from "../types/character.type";
import { characterActionTypes } from "./action.types";

export type CharacterAction = {
    type: string;
    payload: Array<CharacterTypes> | CharacterTypes;
};

export const CharacterLoadActionCreator = (
    payload: Array<CharacterTypes>
): CharacterAction => ({
    type: characterActionTypes.load,
    payload: payload,
});

export const CharacterTalkActionCreator = (
    payload: CharacterTypes
): CharacterAction => ({
    type: characterActionTypes.talk,
    payload: payload,
});

export const CharacterDieActionCreator = (
    payload: CharacterTypes
): CharacterAction => ({
    type: characterActionTypes.die,
    payload: payload,
});
