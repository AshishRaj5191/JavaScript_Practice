let btn = document.getElementById('btn');

btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = 'red';
    btn.textContent = "Button Clicked";
});

btn.addEventListener('mouseup', () => {
    btn.style.backgroundColor = 'green';
    btn.innerText = "Button Released";
});