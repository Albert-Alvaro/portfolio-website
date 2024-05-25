import './index.scss'
import kaboom from "kaboom";
import sheet from "../../assets/images/spritesheet.png"
import map from "../../assets/images/map.png"
import mapson from "./map.json"
import { scaleFactor } from './constant';


const Game2 = () => {
    const k = kaboom({
        global: false,
        touchToMouse: true,
        canvas: document.getElementById("game")
    });

    k.loadSprite("spritesheet", sheet, {
        sliceX: 39,
        sliceY: 31,
        anims: {
            "idle-down": 936,
            "walk-down": {from: 936, to: 939, loop:true, speed:8},
            "idle-side": 975,
            "walk-side": {from: 975, to: 978, loop:true, speed:8},
            "idle-up": 1014,
            "walk-up": {from: 1014, to: 1017, loop:true, speed:8},

        }
    })

    k.loadSprite("map", map )

    k.setBackground(k.Color.fromHex("#311047"))

    k.scene("main", async () => {
        const mapData = await (await fetch(mapson)).json();
        const layers = mapData.layers;

        const map = k.make([
            k.sprite("map"), 
            k.pos(0), 
            k.scale(scaleFactor)
        ]);
        
        const player = k.make([
            k.sprite("spritesheet", {anim: "idle-down"}),
            k.area({shape: new k.Rect(k.vec2(0, 3), 10, 10)}),
            k.body(),
            k.anchor("center"),
            k.pos(),
            k.scale(scaleFactor),
            {
                speed: 250,
                direction: 'down',
                isInDialogue: false
            },
            "player", 
        ]);
        for (const layer of layers) {
            if (layer.name === "boundaries") {
                for ( const boundary of layer.objects) {
                    map.add([
                        k.area({
                            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height)
                        }),
                        k.body({isStatic: true}),
                        k.pos(boundary.x, boundary.y),
                        boundary.name,
                    ]);

                    if (boundary.name) {
                        player.onCollide(boundary.name, () => {
                            player.isInDialogue = true;

                        });
                    }

                };
            };
        };
    });

    k.go("main")

    function displayDialogue(text, onDisplayEnd) {
        const dialogueUI = document.getElementById("textbox-container");
        const dialogue = document.getElementById("dialogue");
        
        dialogueUI.style.display = "block";

        let index = 0;
        let currentText= "";
        const intervalRef = setInterval(() => {
            if (index < text.length) {
                currentText += text[index];
                dialogue.innerHTML = currentText;
                index++;
                return;
            }

            clearInterval(intervalRef);
        }, 5)
    }

    return(
        <div className='container game2'>
            <div className='cont'>
                <div className='ui'>

                    <p className='note'>Tap/Click around to move</p>
                    <div id='textbox-container' style={{display: "none"}}>
                        <div id="textbox">
                            <p id="dialogue" className="ui-text"></p>
                            <div className="btn-container">
                                <button id="close" className="ui-close-button">Close</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='game-cont'>
                    <canvas id='game'></canvas>
                </div>
            </div>
        </div>
    )
}

export default Game2