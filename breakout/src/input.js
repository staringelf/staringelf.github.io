import {GAMESTATE} from './game.js';

export default class InputHandler {
    constructor (game, paddle) {
        document.addEventListener('keydown', e => {
           switch (e.keyCode) {    
                case 37:
                    paddle.moveLeft();
                    break;
                case 39: 
                    paddle.moveRight();
                    break;
                case 27: 
                    if(game.state !== GAMESTATE.MENU)
                    game.togglePause();
                    break;
                case 32: 
                    game.start();
                    break;
             }

        })

        document.addEventListener('keyup', e => {
            switch (e.keyCode) {
                case 37: 
                case 39:
                    paddle.stop();
                    break;
            }
        })
    }
}
