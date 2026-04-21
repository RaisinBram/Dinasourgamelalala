export class Sprite {
    constructor (game) {
        this.game = game
        this.scale = 1.5      

        this.set_sprite("cacti1")
     } 

    set_sprite(sprite_name) {
        this.sprite = this.game.sprites[this.current_sprite]
    }

    draw(ctx) {
         ctx.drawImage(this.game.sprite_sheet,
            this.sprite.x, sprite.y,
            this.sprite.w, sprite.h,
            //destination corner - upper right
            this.x - sprite.cx * this.scale,
            this.y - sprite.cy * this.scale,
            //destination scale
            this.sprite.w * this.scale,
            this.sprite.h * this.scale
         )

    }
}