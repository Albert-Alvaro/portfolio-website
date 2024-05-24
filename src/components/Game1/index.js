import './index.scss'
import {motion} from "framer-motion"
import { useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';

const Game1 = () => {

    var board;
    var score = 0;
    var rows = 4;
    var columns = 4;

    useEffect(() => {
        setGame();
        (function(d) {
            var
                ce = function(e, n) {
                    var a = document.createEvent("CustomEvent");
                    a.initCustomEvent(n, true, true, e.target);
                    e.target.dispatchEvent(a);
                    a = null;
                    return false
                },
                nm = true,
                sp = {
                    x: 0,
                    y: 0
                },
                ep = {
                    x: 0,
                    y: 0
                },
                touch = {
                    touchstart: function(e) {
                        sp = {
                            x: e.touches[0].pageX,
                            y: e.touches[0].pageY
                        }
                    },
                    touchmove: function(e) {
                        nm = false;
                        ep = {
                            x: e.touches[0].pageX,
                            y: e.touches[0].pageY
                        }
                    },
                    touchend: function(e) {
                        if (nm) {
                            ce(e, 'fc')
                        } else {
                            var x = ep.x - sp.x,
                                xr = Math.abs(x),
                                y = ep.y - sp.y,
                                yr = Math.abs(y);
                            if (Math.max(xr, yr) > 20) {
                                ce(e, (xr > yr ? (x < 0 ? 'swl' : 'swr') : (y < 0 ? 'swu' : 'swd')))
                            }
                        };
                        nm = true
                    },
                    touchcancel: function(e) {
                        nm = false
                    }
                };
            for (var a in touch) {
                d.addEventListener(a, touch[a], false);
            }
        })(document);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const restart = (e) => {
        e.preventDefault();
        window.location.reload();
    }
    

    function setGame() {
        board = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]  
        ]

        // board = [
        //     [2,2,2,2],
        //     [2,2,2,2],
        //     [4,4,8,8],
        //     [4,4,8,8]
        // ]

        for (let r = 0 ; r < rows; r++){
            for (let c = 0 ; c < columns ; c++){
                let tile = document.createElement("div");
                tile.id = r.toString() + "-" + c.toString();
                let num = board[r][c];
                updateTile(tile, num);
                document.getElementById("board").append(tile);

            }
        }

        setTwo();
        setTwo();
    }

    function hasEmptyTile() {
        for (let r = 0 ; r< rows; r++){
            for (let c =0; c < columns ; c++){
                if (board[r][c] === 0){
                    return true;
                }
            }
        }
        return false;
    }

    function setTwo() {
        if (!hasEmptyTile()){
            return;
        }

        
        let found = false;

        while (!found){
            let r = Math.floor(Math.random() * rows);
            let c = Math.floor(Math.random() * columns);

            if (board[r][c] === 0) {
                board[r][c] = 2;
                let tile = document.getElementById(r.toString()+"-"+c.toString())
                tile.innerText = "2";
                tile.classList.add("x2")
                found = true;


            }

        }
    }

    function updateTile(tile, num) {
        tile.innerText = " ";
        tile.classList.value = "";
        tile.classList.add("tile");
        if (num > 0){
            tile.innerText = num;
            if (num <= 4096){
                tile.classList.add("x"+num.toString());
            } else{
                tile.classList.add("x8192");
            }
        }
    }

    document.addEventListener("keyup", (e) => {
        if (e.code === 'ArrowLeft') {
            slideLeft();
            setTwo();
        }
        else if (e.code === 'ArrowRight') {
            slideRight();
            setTwo();

        }
        else if (e.code === 'ArrowUp') {
            slideUp();
            setTwo();
        }
        else if (e.code === 'ArrowDown') {
            slideDown();
            setTwo();
        }
        document.getElementById("score").innerText = score.toString();
    })

    document.body.addEventListener('swl', (e) => {
        slideLeft();
        setTwo();
        document.getElementById("score").innerText = score.toString();
    });
    document.body.addEventListener('swr', (e) => {
        slideRight();
        setTwo();
        document.getElementById("score").innerText = score.toString();
    });
    document.body.addEventListener('swu', (e) => {
        slideUp();
        setTwo();
        document.getElementById("score").innerText = score.toString();
    });
    document.body.addEventListener('swd', (e) => {
        slideDown();
        setTwo();
        document.getElementById("score").innerText = score.toString();
    });

    function filterZero(row) {
        return row.filter(num => num !== 0);
    }

    function slide(row) {
        row = filterZero(row);
        for (let i = 0 ; i < row.length-1 ; i++){
            if(row[i] === row[i+1]) {
                row[i] *= 2;
                row[i+1] = 0;
                score += row[i];
            }
        }

        row = filterZero(row);

        while (row.length < columns){
            row.push(0);
        }

        return row;

    }

    function slideLeft() {
        for (let r = 0 ; r< rows; r++){
            let row = board[r];
            row = slide(row);
            board[r] = row;

            for (let c = 0 ; c < columns; c++){
                let tile = document.getElementById(r.toString() + "-"+c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }
    function slideRight() {
        for (let r = 0 ; r< rows; r++){
            let row = board[r];
            row.reverse();
            row = slide(row);
            row.reverse();
            board[r] = row;

            for (let c = 0 ; c < columns; c++){
                let tile = document.getElementById(r.toString() + "-"+c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }

    function slideUp() {
        for (let c = 0 ; c < columns ; c++){
            let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
            row = slide(row);

            for (let r = 0 ; r < rows; r++){
                board[r][c] = row[r];
                let tile = document.getElementById(r.toString() + "-"+c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }

    function slideDown() {
        for (let c = 0 ; c < columns ; c++){
            let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
            row.reverse();
            row = slide(row);
            row.reverse();

            for (let r = 0 ; r < rows; r++){
                board[r][c] = row[r];
                let tile = document.getElementById(r.toString() + "-"+c.toString());
                let num = board[r][c];
                updateTile(tile, num);
            }
        }
    }

    return(
        <>
        <div className='container game1'>
            <h1>2048</h1>
            <hr/>
            <h2>Score: <span id='score'>0</span></h2>
            <div id='board'>

            </div>

            <div className="button-modal">
                        <motion.button
                            whileHover={{ scale: 1.1}}
                            whileTap={{scale:0.9}}
                            onClick={restart}
                            className="button-1"
                        >
                            Restart!
                        </motion.button>
            </div>
            <div className='back'>
                <Link to={{ pathname:'/projects'}}>
                    <motion.button
                        whileHover={{ scale: 1.1}}
                        whileTap={{scale:0.9}}
                        className="button-1"
                    >
                        Back
                    </motion.button>
                </Link>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Game1