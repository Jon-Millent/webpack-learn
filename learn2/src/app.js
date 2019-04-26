import jQuery from 'utils/jquery.js'

console.log(jQuery);

window.onload = function () {
    document.body.innerHTML = '<h1 id="g">xxxxxxxxxx</h1>'
    new jQuery().findById('g').style.backgroundColor = '#E00';
}