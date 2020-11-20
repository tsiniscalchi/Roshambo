const Player = require("./Player");
const Game = require("./Game");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers")

function main(args) {
    console.log("Playing a game of Roshambo against the computer.");
    var playerA = new Player("Player", args.move, false);
    var playerB = new Player("Computer", null, true);
    var game = new Game(playerA, playerB);
    var winner = game.play();
    if (winner != null) {
        console.log(`~${winner.name} wins.~`);
    }
    else {
        console.log("Draw!");
    }
}

main(yargs(hideBin(process.argv)).argv);