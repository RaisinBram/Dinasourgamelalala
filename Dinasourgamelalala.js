import { Dino } from './Dino.js'
import { Cactus } from './Cacti.js'
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
            "crouching1": { x: 8162, y: 36, w: 118, h: 60, cx: 34, cy: 60 },
            "crouching2": { x: 1980, y: 36, w: 118, h: 60, cx: 34, cy: 60 },
            "bird1": { x: 260, y: 14, w: 92, h: 68, cx: 28, cy: 20 },
            "bird2": { x: 352, y: 2, w: 92, h: 68, cx: 28, cy: 32 },
            "cacti1": { x: 652, y: 2, w: 50, h: 100, cx: 24, cy: 96 },
            "cacti2": { x: 702, y: 2, w: 48, h: 100, cx: 24, cy: 96 },
        }

        //Create a dino object
        //writing this gives it object to be in game
        this.dino = new Dino(this)

        //Create obstacles\
        this.obstacles = []

        this.cactus_counter = 10

        // create bird and add it to the obstacle list
        //var bird = new Bird(this)
        // this.obstacles.push(this.bird)

        //Set the game inital state
        this.state = PLAYING

        this.score = 0

    }

    run() {
        //Start animating
        console.log("running the game")
        this.frame()
    }

    frame() {
        // CLear entire canvas
        this.ctx.clearRect(0, 0, 800, 600)


        this.ctx.beginPath()
        this.ctx.moveTo(10, settings.floor_y)
        this.ctx.lineTo(780, settings.floor_y)
        this.ctx.stroke()

        if (this.state == PLAYING) {
            this.score += 1
        }


        //Draw the current score
        this.ctx.font = "30px times"
        this.ctx.fillStyle = "blue";
        var actual_score = Math.round(this.score / 30)
        this.ctx.fillText(`${actual_score}`, 400, 50);

        // Tell the dinosaur object to draw
        this.dino.draw(this.ctx)

        // Draw all obstacles in the list
        console.log(this.obstacles)
        for (const obstacle of this.obstacles) {
            obstacle.draw(this.ctx)
        }

        if (this.state == PLAYING) {
            this.dino.animate()
            for (const obstacle of this.obstacles) {
                obstacle.animate(this.ctx)

                if (this.dino.collides_with(obstacle)) {
                    this.state = LOST
                }
            }

            this.obstacles = this.obstacles.filter(o => o.x > -50)

            this.cactus_counter -= 1

            if (this.cactus_counter <= 0) {
                var cactus = new Cactus(this)
                this.obstacles.push(cactus)
                this.cactus_counter = 250 + (Math.random() * 100)

            }

            this.bird_counter -= 1

            if (this.bird_counter <= 0) {
                var bird = new Bird(this)
                this.obstacles.push(bird)
                this.bird_counter = 250 + (Math.random() * 100)

            }

        } else if (this.state == LOST) {
            this.ctx.font = "60px times"
            this.ctx.fillStyle = "black";
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle"
            this.ctx.fillText("YOU LOST!",
                this.canvas.width / 2, this.canvas.height / 2);

        }

        // Request that the browser 
        window.requestAnimationFrame(this.frame.bind(this))
    }
}