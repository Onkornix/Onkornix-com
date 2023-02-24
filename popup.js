let forceStop = null
hover = false
const para = document.getElementById('para1')
const popup = document.getElementById('popup')
const exit_b = document.getElementById('x_button')
function gotHover() {         
    setTimeout(()=>{
        inAnim = false
        forceStop = false
        let pos = 0
        if (hover == true){return}
        else if (hover == false) {hover = true}
        para.innerHTML = '===> CLICK HERE NOW <==='
        para.addEventListener('mousedown', function(){ 
            setTimeout(()=>{para.innerHTML = 'you\'re such a bro'}, 1000)})
        popup.style = "opacity: 1; transition: opacity 2s"
        exit_b.addEventListener('mouseover', function(){
            if (inAnim == true) {return}
            let goLeft = null;
            let goRight = null
            let popupWidth = Math.round(popup.clientWidth - 20)
            clearInterval(goLeft)
            clearInterval(goRight)
            if (pos == 0 ){goLeft = setInterval(left, 1)}
            else if (pos == popupWidth){
                    inAnim = true
                    goRight = setInterval(right, 1)
                    inAnim = false
                }
            function left() {
                if (pos == popupWidth || forceStop == true) {
                    inAnim == false
                    clearInterval(goLeft)
                }
                else {
                    pos++
                    exit_b.style.right = pos + "px"
                } 
            }
            function right() {
                if (pos == 0 || forceStop == true) {
                    clearInterval(goRight)
                }
                else {
                    pos--
                    exit_b.style.right = pos + "px"
                }
            }})
    }), 500 
}
function appeased() {
    hover = false
    setTimeout(()=>{exit_b.style.right = "0px"}, 1100)
    popup.style = "opacity: 0; transition: opacity 1s"
    forceStop = true
}
document.getElementById('kitty').addEventListener('mouseover', gotHover)
document.getElementById('x_button').addEventListener('mousedown', appeased)
