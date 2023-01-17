import React, { useEffect } from "react";
import { useCharacters } from "../../hooks/use.characters";
import { HomePage } from "../../pages/home/home.page";
import "./App.scss";

function App() {
    const { item, characters, handleLoad, handleTalk, handleDie } =
        useCharacters();

    useEffect(() => {
        handleLoad();
    }, [characters]);

    return (
        <div className="App">
            <HomePage
                character={item}
                characters={characters}
                handleTalk={handleTalk}
                handleDie={handleDie}
            ></HomePage>
        </div>
    );
}

export default App;
