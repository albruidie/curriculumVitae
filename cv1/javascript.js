let desc = document.getElementById('button');

function descarga () {
    if (desc.innerHTML === 'Imprime mi CV') { 
        window.print();
        desc.style.backgroundColor = 'blue'
        desc.innerHTML = 'Has imprimido mi CV'
    }
    

} 

let exp1 = document.getElementById('exp1');
let exp2 = document.getElementById('exp2');
let exp3 = document.getElementById('exp3');

function change(r) {
    if (r === 'dentro') {
        exp1.style.backgroundColor = 'green';
        exp2.style.backgroundColor = 'green';
        exp3.style.backgroundColor = 'green';
    } else {
        exp1.style.backgroundColor = '#e4f7d5'
        exp2.style.backgroundColor = '#e4f7d5'
        exp3.style.backgroundColor = '#e4f7d5'
    }
    
}

