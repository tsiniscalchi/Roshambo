class Game {
    constructor(playerA, playerB, possibleMoves = [rock, paper, scissors]) {
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
        throw Error(`$`)
    }




}


