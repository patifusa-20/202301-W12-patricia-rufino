import { useContext } from "react";
import { CharacterContext } from "../../context/character.context";
import { CharacterTypes } from "../../types/character.type";

export function Buttons({ character }: { character: CharacterTypes }) {
    const { handleTalk, handleDie } = useContext(CharacterContext);

    const handleTalkClick = () => {
        handleTalk(character);
    };

    const handleDieClick = () => {
        handleDie(character);
    };

    return (
        <>
            <div className="character__actions">
                <button
                    className="character__action btn"
                    id="btn-communication"
                    onClick={handleTalkClick}
                >
                    habla
                </button>
                <button
                    className="character__action btn"
                    id="btn-die"
                    onClick={handleDieClick}
                >
                    muere
                </button>
            </div>
        </>
    );
}
