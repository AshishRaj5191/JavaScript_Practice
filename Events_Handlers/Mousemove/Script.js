const myDiv = document.getElementById('my_div');

myDiv.addEventListener('mousemove', () => {
    myDiv.style.backgroundColor = 'purple';
    myDiv.style.cursor = 'pointer';
    myDiv.style.height = '200px';
    myDiv.style.width = '200px';
    myDiv.style.border = '2px solid black';
    myDiv.textContent = 'This is after Hovering';
});