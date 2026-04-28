import { Sprite } from './sprite.js'
import settings from './settings.js'

const STANDING = "standing"
const WALKING = "walking"
const CROUCHING = "crouching"

export class Dino extends Sprite {
    constructor(game) {
        super(game)
        //Create the positional and movement variables
        this.x = 100
        this.y = settings.floor_y
        this.dy = 0
        this.set_sprite("standing")

        this.set_state(WALKING)

        //this.current_sprite = "walking1"
        //this.set_sprite (this.current_sprite)
        //this.walking_counter = 10

        document.addEventListener("keydown", this.keydown.bind(this))
        document.addEventListener("keyup", this.keyup.bind(this))
    }
    //bird flap down coor. = 239,2 top coor 
    //bird flap down coor. = 285,32 bottom coor.
    //bird flap up coor. = 193, 8 top coor.
    //bird flap up coor. = 239,42 bottom coor. 
    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()

        if (event.key == "ArrowUp") {
        //set the vertical speed to "jump"
        if (this.y == settings.floor_y) {
            this.dy = -settings.jump_dy
        }
     } else if (event.key == "ArrowDown") {
          this.set_state(CROUCHING)
        }
     } 


    set_state(state) {
        this.state = state
        if (this.state == STANDING) {
            this.current_sprite = "standing"
        } else if (this.state == WALKING) {
            this.current_sprite = "walking1"
            this.walking_counter = 10
        }
    }

    animate() {
        this.y += this.dy
        this.dy += settings.gravity_dy
        if (this.y > settings.floor_y) {
            this.dy = 0
            this.y = settings.floor_y
        }

        if (this.state == WALKING) {
            this.walking_counter -= 1
            if (this.walking_counter == 0) {
                if (this.current_sprite == "walking1") {
                    this.current_sprite = "walking2"
                } else {
                    this.current_sprite = "walking1"
                }
                this.set_sprite(this.current_sprite)
                this.walking_counter = 20
            }

        } else if (this.state == CROUCHING) {
            this.walking_counter -= 1
            if (this.walking_counter == 0) {
                if (this.current_sprite == "crouching1") {
                    this.current_sprite = "crouching2"
                } else {
                    this.current_sprite = "crouching2"
                }
                this.set_sprite(this.current_sprite)
                this.walking_counter = 20
            }
        }
    }

}


//Dino Cords 677,2
