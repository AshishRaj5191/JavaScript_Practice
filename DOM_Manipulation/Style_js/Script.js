let para = document.getElementById('p_id');
let spn = document.createElement('span');
spn.innerText = "Text coming straight away from js";

spn.style.color = 'blue';
spn.style.fontSize = '100px';
spn.style.backgroundColor = 'orange';

para.appendChild(spn);