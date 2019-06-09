class Sgr {
    constructor(config) {

        this.config = Object.assign({
            router: Object,
            app: String
        }, config)

        this.ele = document.querySelector(this.config.app)
    }

    init(){

        this.config.router.bindElement(this.ele);
        this.config.router.init()
        this.config.router.render()

    }
}


export default Sgr
