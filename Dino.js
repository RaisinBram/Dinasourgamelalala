export class Dino { 
    constructor() {
        this.x = 100
        this.y = 100
        this.deltay

        document.addEventListener("keydown", this.keydown.bind (this))
    }

    keydown(event) {
        console.log("key pressed", event)
        this.y += 10
    }
     
    draw(ctx) {
           ctx.fillStyle = "rbg(255, 145, 0)"
           ctx.beginPath()
           ctx.arc(this.x, this.y, 10, 0, Math.PI * 2)
           ctx.fill()
    }
}