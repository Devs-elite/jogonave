//element,removeSnowDuration=20000,body,x,y
const CONFIG ={
    
    place:document.body,
    x:50,
    y:0
}
let val = true
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(function(){
    document.hasFocus()?new Bomb(CONFIG.place,getRandom(0, 100),CONFIG.y,1000,"black"):0
},1000)