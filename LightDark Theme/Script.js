let pagebody = document.getElementById('pagebody');
let btn = document.getElementById('toggleBtn');

let isDark = false;

function toggle() {
    if(isDark == false) {
        pagebody.style.backgroundColor = 'black';
        btn.innerText = 'Light Theme';
    }
    else {
        pagebody.style.backgroundColor = 'white';
        btn.innerText = 'Dark Theme';
    }
    isDark = !isDark;
};