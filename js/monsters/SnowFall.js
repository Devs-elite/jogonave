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
    fallen(duration){
        this.element.style.transition=`height ${duration/1000}s, top ${duration/1000}s`
        this.element.style.width=this.element.offsetHeight+this.element.offsetHeight+"px"
        this.element.style.borderRadius="50px 50px 0px 0px"
        this.element.style.height="0px"
        this.element.style.top=this.body.offsetHeight+"px"
    }
}