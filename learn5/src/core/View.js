class View {

    constructor(config){
        this.config = Object.assign({
            render(){

            },
            data(){
                return {

                }
            }
        }, config)

        this.init()

    }

    init(){
        // 赋值
        this.data = this.config.data()
    }

    render(){

        let html = this.config.render()

        for(let i in this.data) {
            html = html.replace(`{{${i}}}`, this.data[i]);
        }
        return html;

    }

}


export default View
