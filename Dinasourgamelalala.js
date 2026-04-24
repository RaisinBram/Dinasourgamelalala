import { Dino } from './Dino.js'
import { Cacti } from './Cacti.js'
import { Bird } from './bird.js'
import settings from './settings.js'

const PLAYING = "PLAYING"
const LOST = "LOST"


export default class Game {
    constructor() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx = this.canvas.getContext("2d")

        this.sprite_sheet = new Image()
        this.sprite_sheet.src = 'dinosprites.png'

        this.sprites = {
            "standing": { x: 1338, y: 2, w: 88, h: 94, cx: 38, cy: 94 },
            "walking1": { x: 1514, y: 2, w: 88, h: 94, cx: 38, cy: 94 },
            "walking2": { x: 1602, y: 2, w: 88, h: 94, cx: 38, cy: 94 },
            "bird1": { x: 260, y: 14, w: 92, h: 68, cx: 28, cy: 20 },
            "bird2": { x: 352, y: 2, w: 92, h: 68, cx: 28, cy: 32 },
            "cacti1": { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cacti2": { x: 702, y: 2, w: 48, h: 100, cx: 24, cy: 96 },
        }

        //Create a dino object
        //writing this- gives it object to be in game
        this.dino = new Dino(this)
        this.cacti = new Cacti(this)
        this.bird = new Bird(this)

        //Set the game inital state
        this.state = PLAYING

    }

    run() {
        //Start animating
        console.log("running the game")
        this.frame()
    }

    frame() {
        this.ctx.clearRect(0, 0, 800, 600)


        this.ctx.beginPath()
        this.ctx.moveTo(10, settings.floor_y)
        this.ctx.lineTo(780, settings.floor_y)
        this.ctx.stroke()

        // Tell the dinosaur object to draw
        this.dino.draw(this.ctx)
        this.cacti.draw(this.ctx)
        this.bird.draw(this.ctx)

        if (this.state == PLAYING) {
            this.cacti.animate()
            this.bird.animate()
            this.dino.animate()
        } else if (this.state == LOST) {
            this.ctx.font = "60px times"
            this.ctx.fillStyle = "black";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle"
            this.ctx.fillText("YOU LOST!",
                this.canvas.width/2, this.canvas.height/2);

        }

        if (this.dino.collides_with(this.bird)) {
            console.log("collides with bird")
            this.state = LOST
        }

        if (this.dino.collides_with(this.cacti)) {
            console.log("collide")
            this.state = LOST
        }


        // Request that the browser 
        window.requestAnimationFrame(this.frame.bind(this))
    }
}