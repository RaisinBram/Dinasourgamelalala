export class Sprite {
    constructor (game) {
        this.game = game
        this.current_sprite = "cacti1"
        this.scale = 1.5      
     } 

    draw(ctx) {
        //draw Cacti sprite
        var sprite = this.game.sprites[this.current_sprite]
        ctx.drawImage(this.game.sprite_sheet,
            sprite.x, sprite.y,
            sprite.w, sprite.h,
            //destination corner - upper right
            this.x - sprite.cx * this.scale,
            this.y - sprite.cy * this.scale,
            //destination scale
            sprite.w * this.scale,
            sprite.h * this.scale
        )

    }
}