import {Sprite} from './sprite.js'

export class Cacti extends Sprite {
    constructor (game) {
        super(game)
         this.x = 400         //right side of 
         this.y = 200         //floor level

         this.current_sprite = "cacti1"
    } 

animate() {
    this.x -= 1
}

}
