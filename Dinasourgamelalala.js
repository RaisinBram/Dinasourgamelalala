import { Dino } from './Dino.js'
import { Cacti } from './Cacti.js'
import { Bird } from './bird.js'


export default class Game {
    constructor() {
        const canvas = document.getElementById("myCanvas")
        this.ctx = canvas.getContext("2d")

                this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dino_sprite.png'

        this.sprites = {
            "standing": { x: 677, y: 2, w: 44, h: 47, cx: 0, cy: 0 },
            "walking1": { x: 765, y: 2, w: 44, h: 47, cx: 0, cy: 0 },
            "walking2": { x: 809, y: 2, w: 44, h: 47, cx: 0, cy: 0 },
            "bird flap down": { x: 130, y: 7, w: 47, h: 35, cx: 14, cy: 10 },
            "bird flap up": { x: 176, y: 1, w: 47, h: 50, cx: 14, cy: 16 }
        }

        //Create a dino object
        //writing this- gives it object to be in game
        this.dino = new Dino (this)
        this.cacti = new Cacti(this)
        this.bird = new Bird (this)
    
    }

    run() {
        //Start animating
        console.log("running the game")
        this.frame()
    }

    frame() {
        this.ctx.clearRect(0, 0, 800, 600) 


        this.ctx.beginPath()
        this.ctx.moveTo(10,200)
        this.ctx.lineTo(780,200)
        this.ctx.stroke()


        this.dino.draw(this.ctx)
        this.cacti.draw(this.ctx)
        this.bird.draw(this.ctx)

        
        window.requestAnimationFrame(this.frame.bind(this))
    }
}