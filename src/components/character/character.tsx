import { useContext } from "react";
import { CharacterContext } from "../../context/character.context";
import { CharacterTypes } from "../../types/character.type";

export function Character({ character }: { character: CharacterTypes }) {
    const { handleTalk, handleDie } = useContext(CharacterContext);

    const fullName = character.name + " " + character.family;
    const loadCharacterTraits = (character: CharacterTypes) => {
        let characterTraits = "";
        if (character.years) {
            characterTraits += `Años de reinado: ${character.years}`;
        }
        if (character.weapon) {
            characterTraits += `Arma: ${character.weapon}`;
        }
        if (character.skill) {
            characterTraits += `Destreza: ${character.skill}`;
        }
        if (character.greasy) {
            characterTraits += `Peloteo: ${character.greasy}`;
        }
        if (character.advisedCharacter && character.family) {
            characterTraits += `Asesora a: ${character.advisedCharacter.name}`;
        }
        if (character.advisedCharacter && character.greasy) {
            characterTraits += `Sirve a: ${character.advisedCharacter.name}`;
        }
        return characterTraits;
    };

    const handleTalkClick = () => {
        handleTalk(character);
    };

    const handleDieClick = () => {
        handleDie(character);
    };

    return (
        <>
            <li className="character col" id={character.id}>
                <div className="card character__card">
                    <img
                        src={character.image}
                        alt={fullName}
                        className={
                            character.isAlive
                                ? "character__picture card-img-top"
                                : "character__picture card-img-top character__picture--rotate"
                        }
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            {fullName}
                        </h2>
                        <div className="character__info">
                            <ul className="list-unstyled">
                                <li>Edad: {character.age} años</li>
                                <li>
                                    Estado:<i className="fas fa-thumbs-up"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                {loadCharacterTraits(character)}
                            </ul>
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
                        </div>
                    </div>
                    <i className="emoji">{character.icon}</i>
                </div>
            </li>
        </>
    );
}
