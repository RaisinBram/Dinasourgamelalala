export class bird {
    constructor(game) {
        this.game = game
        this.x =  600             //right side of
        this.y =  200           //floor level
    }
     draw(ctx) {
        this.scale = 1.5
        //draw bird sprite

        var current_sprite = "bird.js"
        var sprite = this.game.sprites[current_sprite]

        ctx.drawImage(this.game.sprite_sheet,
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
    }
}
