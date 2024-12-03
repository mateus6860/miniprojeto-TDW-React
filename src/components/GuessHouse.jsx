import React, { useState, useEffect } from "react";
import "./css/GuessHouse.css";

import Character from "./Character";
import HouseButtons from "./HouseButtons";
import GenerateButton from "./GenerateButton";

function GuessHouse() {

    // STATES
    const [character, setCharacter] = useState(null); // State para a personagem
    const [selectedHouse, setSelectedHouse] = useState(null); // State para a casa selecionada
    const [feedback, setFeedback] = useState(null); // State para o feedback

    const url = "https://harry-potter-api-en.onrender.com/db";

    // Function to fetch a random character
    function fetchRandomCharacter() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                let characters = data.characters;

                // Retirar a personagem que tem uma casa diferente das outras
                characters = characters.filter((character) => character.hogwartsHouse !== "ninguna");

                const randomNum = Math.floor(Math.random() * characters.length);
                const randomCharacter = characters[randomNum];

                // Atualizar o state para a personagem aleatória
                setCharacter(randomCharacter);

                // Reset do feedback
                setFeedback(null);
            })
            .catch((error) => console.log(error));
    };

    // useEffect com a função fetch
    useEffect(() => {
        fetchRandomCharacter();
    }, []); // Garantir que corre apenas 1 vez



    // Função para o click da casa
    function handleHouseClick(house) {

        if (!character) return;

        // Atualizar casa clicada
        setSelectedHouse(house);

        // Feedback
        setFeedback(house === character.hogwartsHouse ? "correct" : "incorrect");
    };

    return (
        <>
            <div className="page-title-container">
                <h1 className="page-title">Which Hogwarts House Is This Character In?</h1>
            </div>
            <div id="main" className="container">
                <div className="row w-100">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        {/* Passar personagem como prop */}
                        {character && <Character character={character} />}
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <HouseButtons
                            onHouseClick={handleHouseClick}
                            feedback={feedback}
                            selectedHouse={selectedHouse}
                        />
                    </div>
                </div>

                <div className="col-12 w-100 mt-4">
                    <GenerateButton onGenerate={fetchRandomCharacter} />
                </div>
            </div>
        </>
    );
}

export default GuessHouse;
