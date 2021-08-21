document.addEventListener('DOMContentLoaded', init);

function init() {
    fetch('https://random-d.uk/').then(response => response.text()).then(text => {
        display(text);
    });
}

function display(output) {
    const p = document.createElement('p');
    p.innerHTML = output;
    document.body.appendChild(p);
}
