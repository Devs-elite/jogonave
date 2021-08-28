class SnowFall extends Bomb{
    constructor(obj){
        super(obj.place);
        this.interval=10
        this.color="white"
        this.width=4
        this.height=4
        this.x=this.getRandom(0,100);
        this.y=obj.y
        this.duration=1000;
        this.receives()
        this.loop(this.interval,this.duration)
        
    }
}