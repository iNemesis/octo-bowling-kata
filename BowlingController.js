const calculateLineScore = require("./index");

const BowlingController = function (listPlayer) {
    this.listPlayer = listPlayer;

    this.getUsers = function () {
        return this.listPlayer
    }

    this.getUser = function(username) {
        return this.listPlayer.find(player => player.name === username)
    }

    this.getUserScore = function(username) {
        const wantedPlayer = this.getUser(username)
        return calculateLineScore(wantedPlayer.line)
    }
}

module.exports = BowlingController