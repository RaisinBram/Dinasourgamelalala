import { Dino } from './Dino.js'
import { Cacti } from './Cacti.js'

export default class Game {
    constructor() {
        const canvas = document.getElementById("myCanvas")
        this.ctx = canvas.getContext("2d")
        this.Dino = new Dino ()
        this.cacti = new Cacti()

    
    }

    run() {
        console.log("running the game")
        this.frame()
    }

    frame() {
        this.ctx.clearRect(0, 0, 800, 600) 


        this.ctx.beginPath()
        this.ctx.moveTo(10,200)
        this.ctx.lineTo(780,200)
        this.ctx.stroke()


        this.Dino.draw(this.ctx)

        
        window.requestAnimationFrame(this.frame.bind(this))
    }
}