import { Adviser } from "../model/adviser.model";
import { Fighter } from "../model/fighter.model";
import { King } from "../model/king.model";
import { Squire } from "../model/squire.model";

const character1: King = new King(
    "Joffrey",
    "Baratheon",
    25,
    "rey",
    "assets/img/joffrey.jpg",
    3
);
const character2: Fighter = new Fighter(
    "Jaime",
    "Lannister",
    35,
    "luchador",
    "assets/img/jaime.jpg",
    "espada",
    8
);
const character3: Fighter = new Fighter(
    "Daenerys",
    "Targaryen",
    34,
    "luchadora",
    "assets/img/daenerys.jpg",
    "dragones",
    9
);
const character4: Adviser = new Adviser(
    "Tyrion",
    "Lannister",
    49,
    "asesor de Daenerys",
    "assets/img/tyrion.jpg",
    character3
);
const character5: Squire = new Squire(
    "Bronn",
    "",
    27,
    "escudero de Jaime",
    "assets/img/bronn.jpg",
    character2,
    8
);

export const charactersData = [
    character1,
    character2,
    character3,
    character4,
    character5,
];
