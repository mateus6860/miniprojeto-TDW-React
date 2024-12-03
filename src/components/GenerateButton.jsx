function GenerateButton({ onGenerate }) {
    return (
        <>
            <div className="col-4 w-100 mt-4">
                <button
                    onClick={onGenerate} // Chamar a função como prop
                    id="generate-btn"
                    className="generateBtn"
                >
                    <img src="imgs/restart.png" className="generateicon" alt="Restart Icon" />
                    Random Character
                </button>
            </div>
        </>
    );
}

export default GenerateButton;
