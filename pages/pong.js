

const ball = document.getElementById('ball')
ball.addEventListener('mousedown', () =>{
    let x = null
    let y = null
    let move = null
    move = setInterval(moveFunc, 10, /*-rise*/3, /*run*/1)
    function moveFunc(rise,run){
        if (x >= 213 - run || x <= -213 - run || y >= 213 + rise || y <= -213 + rise){
            console.log(x,y)
            /*
            switch (rise > 0) {
                case true: 
                    rise = -rise
                    break;
                case false: 
                    rise = -rise
                    break;
            }
            switch (run > 0){
                case true: 
                    run = -run
                    break;
                case false:
                    run = -run
                    break;
            }
            */
            console.log(rise, run)
            //setInterval(moveFunc, 10, rise, run)
            clearInterval(move)
            return
        }
        y=y-rise
        x=x+run
        ball.style.transform = `translate(${x}px,${y}px)`
        console.log(`(${x},(-)${y})`)

    }
})
