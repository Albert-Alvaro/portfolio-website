import './index.scss'
import kaboom from "kaboom";
import sheet from "../../assets/images/spritesheet.png"

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
        }
    })
    return(
        <div className='container game2'>
            <div className='ui'></div>
            <div className='game-cont'>
                <canvas id='game'></canvas>
            </div>
        </div>
    )
}

export default Game2