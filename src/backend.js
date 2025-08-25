let app=document.getElementById('app');

let count = 0;

function loopcount() {
    for (; count <= 69; count++) {
        console.log(`counter is: ${count}`);
        let h1 = document.createElement('h1');
        h1.textContent = `header ${count}`;
        app.appendChild(h1);
    }
}

loopcount();