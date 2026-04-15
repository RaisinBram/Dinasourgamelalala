export class Dino {
    constructor() {
        //Create the positional and movement variables
        this.x = 100
        this.y = 100
        this.dy = 0

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dino_sprite.png'

        this.sprites = {
            "standing": { x: 677, y: 2, w: 44, h: 47 },
            "walking1": { x: 765, y: 2, w: 44, h: 47 },
            "walking2": { x: 809, y: 2, w: 44, h: 47 },
            "bird flap down": { x: 1048, y: 2, w: 241, h: -45 },
            "bird flap up": { x: 1241, y: 2, w: 195, h: 5},
        }

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

    draw(ctx) {
        this.scale = 1.5
        //draw dino sprite

        var current_sprite = "walking1"
        var sprite = this.sprites[current_sprite]

        ctx.drawImage(this.sprite_sheet,
            sprite.x,
            sprite.y,
            sprite.w,
            sprite.h,
            //destination corner - upper left
            this.x - sprite.w * this.scale / 2,
            this.y - sprite.h * this.scale,
            //destination scale
            sprite.w * this.scale,
            sprite.h * this.scale
        )

        this.y += this.dy
        this.dy += 0.1
        if (this.y > 200) {
            this.dy = 0
            this.y = 200
        }




    }
}


//Dino Cords 677,2
