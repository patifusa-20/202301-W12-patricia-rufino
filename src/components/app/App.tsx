import React, { useEffect } from "react";
import { useCharacters } from "../../hooks/use.characters";
import { HomePage } from "../../pages/home/home.page";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <HomePage></HomePage>
        </div>
    );
}

export default App;
