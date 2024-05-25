import './index.scss'
import kaboom from "kaboom";
import mapson from "./map.json"
import sheet from "../../assets/pix_assets/spritesheet.png"
import map from "../../assets/pix_assets/map.png"
import { scaleFactor } from './constant';
import { useEffect, useRef } from 'react';


const Game2 = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const k = kaboom({
            debug:true,
            global: false,
            touchToMouse: true,
            canvas: canvasRef.current
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
        // const mapData = await((await fetch(mapson))).json();
        const mapData = mapson
        console.log(mapData)
        const layers = mapData.layers;

        const map = k.add([
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
                            displayDialogue("test", () => player.isInDialogue = false)
                        });
                    }

                };
                continue;
            };
            if (layer.name === "spawnpoint") {
                for (const entity of layer.objects){
                    if (entity.name === "Player"){
                        player.pos = k.vec2(
                            (map.pos.x + entity.x) *scaleFactor,
                            (map.pos.y + entity.y) *scaleFactor
                        );
                        k.add(player);
                        continue;
                    }
                }
            }

        };

        k.onUpdate(() => {
            k.camPos(player.pos.x, player.pos.y +100)
        })
    });

    k.go("main")
    }, [])

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
        }, 5);

        const closeBtn = document.getElementById("close");
        function onCloseBtnClick() {
            onDisplayEnd();
            dialogueUI.style.display = "none";
            dialogue.innerHTML = "";
            clearInterval(intervalRef);
            closeBtn.removeEvent("click", onCloseBtnClick);
        }

        closeBtn.addEventListener("click", onCloseBtnClick);
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
                    <canvas id='game' ref={canvasRef}></canvas>
                </div>
            </div>
        </div>
    )
}

export default Game2