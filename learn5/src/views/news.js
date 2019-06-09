import View from '../core/View'
import header from "./header";


export default new View({
    render(){
        return `${header}<h1>{{message}}</h1>`
    },
    data(){
        return {
            message: '新闻'
        }
    }
})
