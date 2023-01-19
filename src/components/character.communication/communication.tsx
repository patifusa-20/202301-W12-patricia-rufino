import { useContext } from "react";
import { CharacterContext } from "../../context/character.context";

export function Communication() {
    const { item } = useContext(CharacterContext);

    return (
        <>
            <div className={item.isTalk ? "comunications on" : "comunications"}>
                <p className="comunications__text display-1">{item.sentence}</p>
                <img
                    className="comunications__picture"
                    src={item.image}
                    alt={item.name}
                />
            </div>
        </>
    );
}
