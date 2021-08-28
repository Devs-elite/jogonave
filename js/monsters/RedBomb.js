class RedBomb extends Bomb{
    constructor(obj){
        super(obj.place);
        this.color="red";//default color
        this.interval=10
        this.width=50
        this.height=50
        this.x=this.getRandom(0,100);
        this.y=obj.y;
        this.duration=1000;
        this.receives();
        this.loop(this.interval,this.duration)
        
    }
    fallen(duration){
        this.element.style.background="green"
    }
}