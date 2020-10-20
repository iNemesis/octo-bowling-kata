const {calculateLineScore} = require('./index');

describe('Kata bowling', () => {
    test('return sum of each knocked pins by roll', () => {
        // Given
        const line = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 20;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    }),
    test('return sum of each knocked pins by frame with spare', () => {
        // Given
        const line = [[1,9],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 29;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    }),
    test('return sum of each knocked pins by frame with strike', () => {
        // Given
        const line = [[10,0],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 30;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    }),
    test('return sum of each knocked pins by frame with two followed strikes', () => {
        // Given
        const line = [[10,0],[10,0],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
        const trueScore = 49;
        // When
        const result = calculateLineScore(line);
        // Then
        expect(result).toEqual(trueScore);
    })
})