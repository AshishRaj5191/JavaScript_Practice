const target_div = document.getElementById('my_id');

target_div.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    
    const menu = document.getElementById('custom_menu');
    menu.style.display = 'block';
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
});