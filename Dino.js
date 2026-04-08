export class Dino { 
    constructor() {
        this.x = 100
        this.y = 100
        this.dy = 0

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dino_sprite.png'

        document.addEventListener("keydown", this.keydown.bind (this))
    }

    keydown(event) {
        console.log("key pressed", event)
        this.dy += -10
    }
     
    draw(ctx) {
        ctx.drawImage(this.sprite_sheet,
            
            this.x, this.y
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