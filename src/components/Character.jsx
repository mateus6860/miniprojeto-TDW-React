import React from "react";

function Character({ character }) {

    // Se ainda não existe personagem, não retornar nada
    if (!character) {
        return null;
    }

    return (
        <div id="main-row" className="character">
            <img
                className="character-image"
                src={character.image}
                alt={character.name}
            />
        </div>
    );
}

export default Character;
