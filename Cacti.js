import {sprite} from './sprite.js'

export class Cacti {
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
