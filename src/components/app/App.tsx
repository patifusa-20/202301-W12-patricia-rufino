import React, { useEffect } from "react";
import { useCharacters } from "../../hooks/use.characters";
import { HomePage } from "../../pages/home/home.page";
import "./App.scss";

function App() {
    const { characters, handleLoad, handleTalk, handleDie } = useCharacters();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <div className="App">
            <HomePage
                characters={characters}
                handleTalk={handleTalk}
                handleDie={handleDie}
            ></HomePage>
        </div>
    );
}

export default App;
