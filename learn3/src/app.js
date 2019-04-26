import './page.css'

import show1 from './tool/show1'
import show2 from './tool/show2'
import showTool from './tool/showTool'

console.log('end');

window.onload = function () {
    new showTool().show();
}

