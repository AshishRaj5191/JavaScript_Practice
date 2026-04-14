const myDiv = document.getElementById('my_div');

myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundColor = 'purple';
    myDiv.style.cursor = 'pointer';
    myDiv.style.height = '200px';
    myDiv.style.width = '200px';
    myDiv.textContent = 'This is on hovering';
});

myDiv.addEventListener('mouseout', () => {
    myDiv.style.backgroundColor = 'white';
    myDiv.textContent = 'This is before hovering';
});