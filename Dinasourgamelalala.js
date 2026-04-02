import { Dino } from './Dino.js'

export default class Game {
    constructor() {
        const canvas = document.getElementById("myCanvas")
        this.ctx = canvas.getContext("2d")
        this.Dino = new Dino ()
    }

    run() {
        console.log("running the game")
        this.frame()
    }

    frame() {
        this.ctx.clearRect(0, 0, 800, 600) 
        this.Dino.draw(this.ctx)


        //this.ctx.font = "30px times new roman"
        //this.ctx.fillStyle = rgba 

        window.requestAnimationFrame(this.frame.bind(this))
    }
}