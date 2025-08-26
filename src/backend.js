// stating variables for the heads
let app = document.getElementById('cabeças');
let count = 0;

function loopcount() {
    for (; count <= 69; count++) {
        //console.log(`counter is: ${count}`);
        let h1 = document.createElement('h1');
        h1.textContent = `cabeça ${count}`;
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
