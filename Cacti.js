import {Sprite} from './sprite.js'
import settings from './settings.js'

export class Cactus extends Sprite {
    constructor (game) {
        super(game)
         this.x = game.canvas.width + 50       //right side of 
         this.y = settings.floor_y         //floor level

        
        //this.current_sprite = "cactus1"
         this.set_sprite  ("cacti1")
    } 

animate() {
    this.x -= settings.cactus_speed
}

}
