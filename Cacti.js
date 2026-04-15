export class Cacti {
    constructor (game) {
         this.x = 600         //right side of 
         this.y = 200         //floor level
         this.game = game
    } 

    draw(ctx) {
        this.scale = 1.5
        //draw Cacti sprite

        ctx.drawImage(this.sprite_sheet,
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