import { CharacterTypes } from "../../types/character.type";

export function Character({ character }: { character: CharacterTypes }) {
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
            characterTraits += `Asesora a: ${character.advisedCharacter.me()}`;
        }
        if (character.advisedCharacter && character.greasy) {
            characterTraits += `Sirve a: ${character.advisedCharacter.me()}`;
        }
        return characterTraits;
    };

    return (
        <>
            <li className="character col" data-name={character.name}>
                <div className="card character__card">
                    <img
                        src={character.image}
                        alt="${character.me()}"
                        className="character__picture card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            {character.me()}
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
                                >
                                    habla
                                </button>
                                <button
                                    className="character__action btn"
                                    id="btn-die"
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
