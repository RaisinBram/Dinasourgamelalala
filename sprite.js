export class Sprite {
    constructor (game) {
        this.game = game
        this.scale = 1.5      

        this.set_sprite("cacti1")
     } 

    set_sprite(sprite_name) {
        this.sprite = this.game.sprites[sprite_name]
    }

    draw(ctx) {
         ctx.drawImage(this.game.sprite_sheet,
            this.sprite.x, this.sprite.y,
            this.sprite.w, this.sprite.h,
            //destination corner - upper right
            this.x - this.sprite.cx * this.scale,
            this.y - this.sprite.cy * this.scale,
            //destination scale
            this.sprite.w * this.scale,
            this.sprite.h * this.scale
         )

    }

    get_bounds() {
        return {
             x: this.x - this.sprite.cx * this.scale,
             y: this.y - this.sprite.cy * this.scale,
             w:this.sprite.w * this.scale,
             h:this.sprite.h * this.scale
        
    }
}