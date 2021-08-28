//element,removeSnowDuration=20000,body,x,y
const CONFIG ={
    place:document.body,
    x:50,
    y:0,
    duration:100// essa é o tempo que levará para o objeto sumir da tela
}
//EXEMPLOS
function invoke(){
    new Booom(CONFIG)
    //new SnowFall(CONFIG)
    //new RedBomb(CONFIG)
}
//-------------------
setInterval(function(){
    document.hasFocus()?invoke():0
},1000)