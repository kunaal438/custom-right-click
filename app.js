const options = document.querySelector('.options');

window.oncontextmenu = (e) => {
    e.preventDefault();

    if(e.y + 250 <= window.innerHeight){
        options.style.top = `${e.y}px`;
    } else{
        options.style.top = `${e.y - 250}px`;
    }

    if(e.x + 200 <= window.innerWidth){
        options.style.left = `${e.x}px`;
    } else{
        options.style.left = `${e.x - 200}px`;
    }
    options.style.display = 'block';
}

window.onclick = () => {
    if(options.style.display === 'block'){
        options.style.display = null;
    }
}