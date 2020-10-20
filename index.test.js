const { expect } = require('@jest/globals');
const {calculateLineScore, BowlingController, BowlingPlayer} = require('./index');

describe('Kata bowling engine', () => {
    test('return sum of each knocked pins by roll', () => {
        // Given
        const line = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 20;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with spare', () => {
        // Given
        const line = [[1,9],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 29;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with strike', () => {
        // Given
        const line = [[10,0],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 30;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with two followed strikes', () => {
        // Given
        const line = [[10,0],[10,0],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 49;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with two followed spares', () => {
        // Given
        const line = [[9,1],[8,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 45;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with a sequence of SPARE/STRIKE/STRIKE/SPARE', () => {
        // Given
        const line = [[9,1],[10,0],[10,0],[8,2],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 91;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with a sequence of Full STRIKES', () => {
        // Given
        const line = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10]];
        const trueScore = 300;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })


    test('return sum of each knocked pins by frame with a sequence of Full SPARES', () => {
        // Given
        const line = [[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[1,9],[9,0]];
        const trueScore = 118;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

    test('return sum of each knocked pins by frame with a sequence of random numbers', () => {
        // Given
        const line = [[3,6],[5,2],[9,0],[10,0],[4,5],[7,3],[4,6],[3,3],[6,1],[3,7],[8,0]];
        const trueScore = 111;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })

})

describe('Kata bowling controller', () => {

    test('return player1 when player1 given', () => {
        // Given
        const playerName = "player1";
        const playerLine = [];
        const bowlingPlayer = new BowlingPlayer(playerName, playerLine);
        const bowlingController = new BowlingController(playerName);
        // When
        const player = bowlingController.player;
        // Then
        expect(player).toEqual(playerName);
    });
});