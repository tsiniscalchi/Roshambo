class Game {
    constructor(playerA, playerB, possibleMoves = ["rock", "paper", "scissors"]) {
        this._playerA = playerA;
        this._playerB = playerB;
        this._possibleMoves = possibleMoves;
    }

    play = () => {
        if (this._playerA.isComputer) {
            this._playerA.move = this._possibleMoves[Math.floor(Math.random() * 3)];
        }

        if (this._playerB.isComputer) {
            this._playerB.move = this._possibleMoves[Math.floor(Math.random() * 3)];
        }

        if (!this._possibleMoves.includes(this._playerA.move)) {
            throw Error(`${this._playerA.name} has played an invalid move!`);
        }

        if (!this._possibleMoves.includes(this._playerB.move)) {
            throw Error(`${this._playerB.name} has played an invalid move!`);
        }

        console.log(`${this._playerA.name} plays ${this._playerA.move}!`);
        console.log(`${this._playerB.name} plays ${this._playerB.move}!`);

        if (this._playerA.move == this._playerB.move) {
            return null;
        }
        else if (this._playerA.move == "rock" && this._playerB.move == "paper"
            || this._playerA.move == "paper" && this._playerB.move == "scissors"
            || this._playerA.move == "scissors" && this._playerB.move == "rock") {
            return this._playerB;
        }
        else if (this._playerA.move == "paper" && this._playerB.move == "rock"
            || this._playerA.move == "rock" && this._playerB.move == "scissors"
            || this._playerA.move == "scissors" && this._playerB.move == "paper") {
            return this._playerA;
        }
    }
}

module.exports = Game;