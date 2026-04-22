import {Sprite} from './sprite.js'

export class Cacti extends Sprite {
    constructor (game) {
        super(game)
         this.x = 600         //right side of 
         this.y = 200         //floor level

        

         this.set_sprite  ("cacti1")
    } 

animate() {
    this.x -= 1
}

}
