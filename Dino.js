import {Sprite} from './sprite.js'
import settings from './settings.js'

export class Dino extends Sprite {
    constructor(game) {
        super(game)
        //Create the positional and movement variables
        this.x = 100
        this.y = settings.floor_y
        this.dy = 0


        document.addEventListener("keydown", this.keydown.bind(this))
    }
//bird flap down coor. = 239,2 top coor 
//bird flap down coor. = 285,32 bottom coor.
//bird flap up coor. = 193, 8 top coor.
//bird flap up coor. = 239,42 bottom coor. 
    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()

        //set the vertical speed to "jump"
        if (this.y == 200) {
            this.dy = -3
        }

    }

    animate() {
        this.y += this.dy
        this.dy += 0.1
        if (this.y > 200) {
            this.dy = 0
            this.y = 200
        }
    }
}


//Dino Cords 677,2
