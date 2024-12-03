import React from "react";
import "./css/Navbar.css";

function Navbar({ setCurrentPage }) {
    return (
        <nav>
            <div className="navbar">
                <a onClick={() => setCurrentPage("home")}>
                    <img src="imgs/harrypotterLogo.png" className="logo" />
                </a>
                <div className="nav-buttons">
                    <a onClick={() => setCurrentPage("home")}>Home</a>
                    <a onClick={() => setCurrentPage("guessHouse")}>Guess House</a>
                    <a onClick={() => setCurrentPage("characterList")}>Character List</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
