import React from "react";
import "./css/CharacterList.css";

function CharacterCard({ nickname, hogwartsHouse, image, onRemove }) {
    return (
        <div className="character-card">
            <img
                src={image}
                className="character-card-img"
            />
            <em>Name: {nickname}</em>
            <div>Hogwarts House: {hogwartsHouse}</div>

            <span className="remove-x" onClick={onRemove}>Avada Kedavra</span>

        </div>
    );
}

export default CharacterCard;
