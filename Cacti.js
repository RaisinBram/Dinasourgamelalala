export class Cacti {
    constructor (game) {
         this.x = 400         //right side of 
         this.y = 200         //floor level
         this.game = game
    } 

    draw(ctx) {
        this.scale = 1.5
        //draw Cacti sprite

        var current_sprite = "bird flap up"
        var sprite = this.game.sprites[current_sprite]

        ctx.drawImage(this.game.sprite_sheet,
            sprite.x,
            sprite.y,
            sprite.w,
            sprite.h,
            //destination corner - upper right
            this.x - sprite.w * this.scale / 2,
            this.y - sprite.h * this.scale,
            //destination scale
            sprite.w * this.scale,
            sprite.h * this.scale
        )

}

}