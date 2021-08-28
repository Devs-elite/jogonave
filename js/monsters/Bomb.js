class Bomb{ // Classe PAI
    constructor(place){
        this.element=this.addEl({place,tag:"div"});
        this.body = place;
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
        this.element.style=`position:absolute;top:${this.y}%;left:${this.x}%;background:${this.color};width:${this.width}px;height:${this.height}px;border-radius:360px;`
    }
    removeEl(){
        this.element.remove()
    }
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    fallen(duration){
        this.element.style.transition=`height ${duration/1000}s, top ${duration/1000}s`
        this.element.style.width=this.element.offsetHeight+this.element.offsetHeight+"px"
        this.element.style.borderRadius="50px 50px 0px 0px"
        this.element.style.height="0px"
        this.element.style.top=this.body.offsetHeight+"px"
    }
    loop(interval,duration){
        let cont=this.element.offsetTop;
       let loop = setInterval(() => {
            this.element.style.top=cont+"px"
            if(this.element.offsetTop+this.element.offsetHeight>=this.body.offsetHeight){
                clearInterval(loop)
                this.fallen(duration);
                setTimeout(() => {
                    this.removeEl() 
                },duration);
            }
            cont++;
        }, (interval));
    }
}