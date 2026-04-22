export class Sprite {
    constructor (game) {
        this.game = game
        this.scale = 0.5      

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

collides_with (other) { 
    // "this" is first sprite
    // "other" os second sprite
    bound_a = this.get_bounds()
    bounds_b = other.get.bounds()

    // If the left edge of A is between the left and right of B
        if (
            ( 
            ( (bounds_b.x >= bounds_a.x)
                &&
              (bounds_b.x <= (bounds_a.x + bounds_a.w))
            )       
            ||
            (   
             ((bounds_b.x+bounds_b.w) >= bounds_a.x)
                 &&
              ((bounds_b.x + bounds_b.w) < (bounds_a.x + bounds_a.w))
            )
           )
           &&
           ( 
            ( (bounds_b.x >= bounds_a.x)
                &&
              (bounds_b.y <= (bounds_a.x + bounds_a.h))
            )       
            ||
            (   
             ((bounds_b.y+bounds_b.h) >= bounds_a.y)
                 &&
              ((bounds_b.y + bounds_b.h) < (bounds_a.y + bounds_a.h))
            )
          )
        )
        {
            return true
        }
         return false

}  