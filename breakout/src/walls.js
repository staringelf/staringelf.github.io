import Brick from './brick.js';

export function buildWall (game, pattern, offsets) {
    let wall = [];
    const brickDimensions = game.getBrickDimensions();
    const brickWidth = brickDimensions.width;
    const borderWidth = 6;
    const brickHeight = brickDimensions.height;
    const brickMargin = brickDimensions.margin;
    const {top, left} = brickDimensions.offsets;
    console.log(left);
    pattern.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick)
                wall.push(new Brick(game, {x: (brickWidth + brickMargin) * brickIndex + left + borderWidth, y: (brickHeight + 15) * rowIndex + top + borderWidth}, brickDimensions, brick));
        })
    });
    return wall;
};

export const patternsLandscape = {

    pattern1: [
        [3,1,1,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,1,1,4],
        [2,1,1,1,1,1,1,1,1,1,4],
        [2,1,1,1,1,1,1,1,1,1,3],
        [4,1,1,1,1,1,1,1,1,1,3],
        [0,1,1,1,1,1,2,2,2,2,2]
    ],

    pattern2: [  
        [4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4]
],


    pattern3: [
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,0,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,1,0,0,0,0],
    ],

    pattern4: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1]
    ],

    pattern5: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1]
    ]


}

export const patternsPortrait = {
    pattern1: [
        [1,1,1,1,1,1,2],
        [1,1,1,1,1,1,3],
        [1,1,1,1,1,1,4],
        [1,1,1,1,1,1,4],
        [1,1,1,1,1,1,1],
        [1,1,1,1,1,1,3],
        [1,1,1,1,1,1,3],
        [4,2,4,2,4,2,1]
    ]   

}