import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import das páginas principais
import GuessHouse from "./components/GuessHouse";
import CharacterList from "./components/CharacterList";
import HomePage from "./components/HomePage";

function App() {
  // State para ver página atual
  const [currentPage, setCurrentPage] = useState("home");

  // Renderizar página
  function renderPage() {

    // Switch para ver qual modo de jogo é clicado
    switch (currentPage) {
      case "home":
        return (
          <div className="row">

            <div className="col-12 col-md-6 mb-6">

              <main>
                <a onClick={() => setCurrentPage("guessHouse")}>
                  <div className="card">
                    <img src="public/imgs/GuessHouseBackground.png" />
                    <div className="card-content">
                      <h2>Guess House</h2>
                      <p>
                        A random character is generated and your purpose is to guess which Hogwarts House
                        they belong to.
                      </p>
                    </div>
                  </div>
                </a>

              </main>
            </div>

            <div className="col-12 col-md-6 mb-6">
              <main>
                <a onClick={() => setCurrentPage("characterList")}>
                  <div className="card">
                    <img src="public/imgs/Harrypottercharacters.jpg.png" />
                    <div className="card-content">
                      <h2>Character List</h2>
                      <p>
                        A random character is generated and you have to guess their name.
                      </p>
                    </div>
                  </div>
                </a>
              </main>
            </div>
          </div>
        );
      case "guessHouse":
        return <GuessHouse />;
      case "characterList":
        return <CharacterList />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {/* Passar função como prop */}

      <Navbar setCurrentPage={setCurrentPage} />
      <div className="body">
        {renderPage()}
      </div>
    </>
  );
}

export default App;
