function conductivity_mod() {
    var WRAPPER_ID = 'conductivity';
    var wrapper = document.getElementById(WRAPPER_ID);
    wrapper.style.width = '100%';

    var CANVAS_ID = 'conductivity-cvs';
    var cvs = document.getElementById(CANVAS_ID);
    cvs.style.margin = 'auto';
    cvs.style.padding = '0';
    cvs.style.display = 'block';
    cvs.style.width = '100%';
}

window.addEventListener("load", conductivity_mod);

