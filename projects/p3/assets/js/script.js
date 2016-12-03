

var winh,
        right;

function onScroll(e) {
    right.children[0].style.top = window.scrollY + 'px';
}

function setTop() {
    right.style.top = -right.children[0].clientHeight + winh + 'px';
}

function update() {
    winh = window.innerHeight;
    setTop();
}

function init() {
    
    winh = window.innerHeight;
    right = document.getElementById('right');
    
    setTop();
    
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', update);
}

window.addEventListener('DOMContentLoaded', init);
