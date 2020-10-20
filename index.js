function isSpare(frame) {
    if (frame[0] !== 10 && calculateFrameScore(frame) === 10) {
        return true;
    }

    return false;
}

function calculateLineScore(line) {
    let result = 0;
    const MAX_FRAMES = 10;

    for (let index = 0; index < line.length && index < MAX_FRAMES; index++) {
        const currentFrame = line[index];

        result += calculateFrameScore(currentFrame);

        const nextFrame = line[index+1];

        if (isSpare(currentFrame)) {
            result += nextFrame[0];
        }

        if (isStrike(currentFrame)) {
            if (isStrike(nextFrame) && nextFrame) {
                //TODO condition si on est à l'avant dernier
                result += line[index+2][0]
            }
            result += calculateFrameScore(nextFrame);
        }
    }

    return result;
}

function calculateFrameScore(frame) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return frame.reduce(reducer, 0);
}

function isStrike(frame) {
    if (frame[0] === 10 && frame[1] === 0) {
        return true;
    }

    return false;
}

module.exports = {
    calculateLineScore
}
