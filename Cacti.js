import {Sprite} from './sprite.js'
import settings from './settings.js'

export class Cacti extends Sprite {
    constructor (game) {
        super(game)
         this.x = 600         //right side of 
         this.y = settings.floor_y         //floor level

        

         this.set_sprite  ("cacti1")
    } 

animate() {
    this.x -= 1
}

}
