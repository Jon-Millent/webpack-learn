
import Sgr from './core/Sgr'
import Router from './core/router'


let $router = new Router({
    routers: [
        {
            path: '/',
            component: ()=> import('./views/home.js')
        },
        {
            path: '/about',
            component: ()=> import('./views/about.js')
        },
        {
            path: '/news',
            component: ()=> import('./views/news.js')
        }
    ]
})

new Sgr({
    router: $router,
    app: '#app'
}).init()
