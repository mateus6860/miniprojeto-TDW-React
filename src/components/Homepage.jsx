
function Homepage() {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 mb-6">
                    <main>
                        <a href="#">
                            <div className="card">
                                <img src="public/imgs/GuessHouseBackground.png" alt="Guess House" />
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
                        <a href="#">
                            <div className="card">
                                <img src="public/imgs/Harrypottercharacters.jpg.png" alt="Guess Name" />
                                <div className="card-content">
                                    <h2>Guess Name</h2>
                                    <p>
                                        A random character is generated and you have to guess their name.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Homepage;