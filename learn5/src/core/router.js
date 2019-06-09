class Router {
    constructor(config){
        this.config = Object.assign({
            routers: []
        }, config)


    }

    init(){
        this.bindEvent()
    }

    async render(){

        let hash = document.location.hash.replace('#', '') || '/'
        let target = null
        this.config.routers.forEach(val=>{
            if(hash === val.path) {
                target = val;
            }
        })

        if(target) {

            let result = await target.component();

            let fn = result.default

            this.ele.innerHTML = fn.render()

        }


    }

    bindEvent() {
        window.onhashchange = ()=>{
            this.render()
        }
    }

    bindElement(ele){
        this.ele = ele;
    }
}


export default Router
