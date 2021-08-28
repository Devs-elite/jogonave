//element,removeSnowDuration=20000,body,x,y
const CONFIG ={
    
    place:document.body,
    x:50,
    y:0
}
console.log(CONFIG.place)
setInterval(function(){
    new Bomb(CONFIG.place,CONFIG.x,CONFIG.y,1000,"black")
},1000)