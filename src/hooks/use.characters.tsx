import { useCallback, useState, useReducer } from "react";
import { charactersData } from "../data/characters.data";
import { CharacterModel } from "../model/character.model";
import { characterReducer } from "../reducers/character.reducer";
import { CharacterTypes, UseCharactersType } from "../types/character.type";
import * as actionCreator from "../reducers/action.creators";

export function useCharacters(): UseCharactersType {
    const initialState: Array<CharacterTypes> = charactersData;
    const [characters, dispatch] = useReducer(characterReducer, initialState);

    const prevState: CharacterTypes = new CharacterModel("", "", 1, "", "");
    const [item, setItem] = useState(prevState);

    const handleLoad = useCallback(async () => {
        dispatch(actionCreator.CharacterLoadActionCreator(characters));
    }, []);

    const closeCommunication = (characterItem: CharacterTypes) => {
        characterItem.isTalk = false;
        dispatch(actionCreator.CharacterTalkActionCreator(characterItem));
        setItem(characterItem);
    };
    const handleTalk = async function (character: CharacterTypes) {
        character.isTalk = true;
        dispatch(actionCreator.CharacterTalkActionCreator(character));
        setItem(character);
        setTimeout(() => {
            closeCommunication(character);
        }, 3000);
    };

    const handleDie = async function (character: CharacterTypes) {
        character.isAlive = false;
        dispatch(actionCreator.CharacterDieActionCreator(character));
    };

    return {
        item,
        characters,
        handleLoad,
        handleTalk,
        handleDie,
    };
}
