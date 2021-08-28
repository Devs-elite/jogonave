class Bomb{
    constructor(place,x,y,duration,color=null){
        this.element=this.addEl({place,tag:"div"});
        this.color=color?color:"rgb(255,255,255)";//default color
        this.interval=10
        this.x=x
        this.y=y
        this.duration=duration;
        this.body = place;
        this.receives()
        this.loop(this.interval,this.duration)
    }
    addEl(obj){
        /*
        exemplo
        obj={
            place:define onde será criado 
            tag:nome da tag que deseja criar,
            insertTag: É para inserir uma tag dentro dessa nova tag criada ou só uma mensagem dentro da tag
            tudo que adicionar depois disso é considerado atributo
            a chave é considerada o nome do atributo e o valor é o valor mesmo rsrs
        }
        */
        let tag;
        if(obj.tag){
            tag = document.createElement(obj.tag);
            for(let key in obj){
                if(key != "place" && key != "tag" && key != "insertTag"){
                    let att = document.createAttribute(key)
                    att.value=obj[key];
                    tag.setAttributeNode(att)
                }
            }
            obj.insertTag?tag.innerHTML=obj.insertTag:0
            obj.place.appendChild(tag);
        }
        return tag
    }
    receives(){
        this.element.style=`position:absolute;top:${this.y}%;left:${this.x}%;background:${this.color};width:4px;height:4px;border-radius:360px;`
    }
    removeEl(){
        this.element.remove()
    }
    loop(interval,duration){
        let cont=this.element.offsetTop;
       let loop = setInterval(() => {
            this.element.style.top=cont+"px"
            if(this.element.offsetTop+this.element.offsetHeight>=this.body.offsetHeight){
                clearInterval(loop)
                this.element.style.transition=`height ${duration/1000}s, top ${duration/1000}s`
                //cont=0;
                this.element.style.width=this.element.offsetHeight+this.element.offsetHeight+"px"
                this.element.style.borderRadius="50px 50px 0px 0px"
                this.element.style.height="0px"
                this.element.style.top=this.body.offsetHeight+"px"
                
                setTimeout(() => {
                    this.removeEl() 
                },duration);
            }
            cont++;
        }, (interval));
    }
}