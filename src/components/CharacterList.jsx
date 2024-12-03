import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./css/CharacterList.css";

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    // Fetch
    useEffect(() => {
        fetch("https://harry-potter-api-en.onrender.com/characters")
            .then((response) => response.json())
            .then((data) => setCharacters(data))


            .catch((error) => console.error(error));
    }, []);

    // Função para remover personagem
    function removeCharacter(nickname) {
        setCharacters((prevCharacters) =>
            prevCharacters.filter((character) => character.nickname !== nickname)
        );
    };

    return (
        <div className="character-list-container">
            <h1>Harry Potter Characters</h1>

            <div className="character-cards-container">
                {characters.map((character, index) => (
                    <CharacterCard
                        key={index}
                        nickname={character.nickname}
                        hogwartsHouse={character.hogwartsHouse}
                        image={character.image}
                        onRemove={() => removeCharacter(character.nickname)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CharacterList;
