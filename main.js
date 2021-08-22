document.addEventListener('DOMContentLoaded', init);

function init() {
    let request = new XMLHttpRequest();
    request.open('GET', 'shape.txt');
    request.responseType = 'text';
    request.onload = function () {
        console.log(request.response);
        display(request.response);
    };
    request.send();
}

function display(output) {
    const p = document.createElement('p');
    p.innerHTML = output;
    document.body.appendChild(p);
}
