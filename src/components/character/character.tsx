import { Adviser } from "../../model/adviser.model";
import { Fighter } from "../../model/fighter.model";
import { King } from "../../model/king.model";
import { Squire } from "../../model/squire.model";
import { CharacterTypes } from "../../types/character.type";
import { Buttons } from "../character.buttons/buttons";

export function Character({ character }: { character: CharacterTypes }) {
    const fullName = character.name + " " + character.family;

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
                                    Estado:
                                    <i
                                        className={
                                            character.isAlive
                                                ? "fas fa-thumbs-up"
                                                : "fas fa-thumbs-down"
                                        }
                                    ></i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                {character instanceof King ? (
                                    <li>Años de reinado: {character.years}</li>
                                ) : (
                                    ""
                                )}
                                {character instanceof Adviser ? (
                                    <li>
                                        Asesora a:
                                        {character.advisedCharacter.name}
                                    </li>
                                ) : (
                                    ""
                                )}
                                {character instanceof Fighter ? (
                                    <li>
                                        <p>Arma: {character.weapon}</p>
                                        <p>Destreza: {character.skill}</p>
                                    </li>
                                ) : (
                                    ""
                                )}
                                {character instanceof Squire ? (
                                    <li>
                                        <p>Peloteo: {character.greasy}</p>
                                        <p>
                                            Sirve a:
                                            {character.advisedCharacter.name}
                                        </p>
                                    </li>
                                ) : (
                                    ""
                                )}
                            </ul>
                            <Buttons character={character}></Buttons>
                        </div>
                    </div>
                    <i className="emoji">{character.icon}</i>
                </div>
            </li>
        </>
    );
}
