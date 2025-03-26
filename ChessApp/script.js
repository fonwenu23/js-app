function greetUser() {
    let name = document.getElementById("nameInput").value;
    let message = name ? `Hello, ${name}! Welcome to Vanilla JS.` : "Please enter your name.";
    
    document.getElementById("greetingMessage").textContent = message;
}

function game() {
    let name = document.getElementById("nameInputs").value;
    let message = name ? `Hello, ${name}! Welcome to Vanilla game.` : "Please enter your game.";
    
    document.getElementById("greetingMessages").textContent = message;
}

function displayChessPiece() {
    // Get the selected value from the dropdown
    let selectedPiece = document.getElementById("chessPiece").value;
    
    let message = selectedPiece ? `You selected the ${selectedPiece}.` : "Please select a piece.";
    
    document.getElementById("pieceMessage").textContent = message;
}