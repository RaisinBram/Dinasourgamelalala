export class Dino {
    constructor() {
        this.x = 100
        this.y = 100
        this.dy = 0

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dino_sprite.png'

        this.sprites = {
            "standing": { x: 677 , y: 2, w: 44, h: 47 },
            "walking1": { x: 765 , y: 2, w: 44, h: 47 },
            "walking2": { x: 809 , y: 2, w: 44, h: 47 }
        }

        document.addEventListener("keydown", this.keydown.bind(this))
    }

    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()


        this.dy += -10

    }

    draw(ctx) {
        this.scale = 1.5
        //draw dino sprite

        var current_sprite = "walking2"
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
        this.dy += 1
        if (this.y > 200) {
            this.dy = 0
            this.y = 200
        }




    }
}


//Dino Cords 677,2