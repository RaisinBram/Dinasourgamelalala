export class Dino { 
    constructor() {
        this.x = 100
        this.y = 100
        this.dy = 0

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dino_sprite.png'

        this.sprite = { x: 49, y: 416, w: 120, h: 129}

        document.addEventListener("keydown", this.keydown.bind (this))
    }

    keydown(event) {
        console.log("key pressed", event)
        event.preventDefault()


        this.dy += -10

    }
     
    draw(ctx) {
        //draw dino sprite
        ctx.drawImage(this.sprite_sheet,
            this.sprite.x, this.sprite.y,
            this.sprite.w, this.sprite.h,
            this.x,        this.y,
            this.sprite.w, this.sprite.h
        )
     
           ctx.fillStyle = "rbg(255, 145, 0)"
           ctx.beginPath()
           ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
           ctx.fill()
           this.y += this.dy 
           this.dy += 1 
           if (this.y > 200){
               this.dy = 0  
               this.y = 200
           }  


            
    
    }
}


//Dino Cords 677,2