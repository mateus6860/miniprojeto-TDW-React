import React from "react";

const HouseButtons = ({ onHouseClick, feedback, selectedHouse }) => {

    const houses1 = [
        { name: "Gryffindor", img: "imgs/gryffindor.png", className: "buttonGry" },
        { name: "Slytherin", img: "imgs/slytherin.png", className: "buttonSly" },
    ];

    const houses2 = [
        { name: "Hufflepuff", img: "imgs/hufflepuff.png", className: "buttonHuf" },
        { name: "Ravenclaw", img: "imgs/ravenclaw.png", className: "buttonRav" },
    ];

    const getButtonClass = (house) => {
        if (selectedHouse === house) {
            return feedback === "correct" ? "correct" : "incorrect";
        }
        return "";
    };

    return (
        <div>
            {/* Gryffindor & Slytherin */}
            <div className="justify-content-center d-flex">
                {/* Map para percorrer os botões todos */}
                {houses1.map((house, index) => (
                    <button
                        key={index}
                        className={`houseBtn ${house.className} ${getButtonClass(house.name)}`}
                        type="button"
                        value={house.name}
                        onClick={() => onHouseClick(house.name)}
                    >
                        <img src={house.img} className="houseicon" />
                        {house.name}
                    </button>
                ))}
            </div>

            {/* Hufflepuff & Ravenclaw */}
            <div className="justify-content-center d-flex mt-3">
                {houses2.map((house, index) => (
                    <button
                        key={index}
                        className={`houseBtn ${house.className} ${getButtonClass(house.name)}`}
                        type="button"
                        value={house.name}
                        onClick={() => onHouseClick(house.name)}
                    >
                        <img src={house.img} className="houseicon" />
                        {house.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HouseButtons;
