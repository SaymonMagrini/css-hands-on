// stating variables for the heads
const app = document.getElementById('cabeças');
let count = 0;

function loopcount() {
    for (; count < 404; count++) {
        //console.log(`counter is: ${count}`);
        let h1 = document.createElement('h1');
        h1.textContent = `cabeça ${count}`;
        h1.id = `c${count}`;
        app.appendChild(h1);
    }
}

loopcount();

function goUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // smooth scrolling effect
    });
}

butao = document.getElementById('botao').addEventListener('click', goUp);

const tooltip = document.getElementById('tooltip');

function showTooltip() {
    tooltip.classList.add('show');
    setTimeout(() => {
        tooltip.classList.remove('show');
    }, 5000);
}

window.addEventListener('load', showTooltip);