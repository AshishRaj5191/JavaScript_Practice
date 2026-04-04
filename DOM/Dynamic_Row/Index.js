let boxes = Array.from(document.getElementsByClassName('container'));

for(let i=0; i<boxes.length; i++) {
    if(i == 0) {
        boxes[i].style.backgroundColor = 'Blue';
    }

    if(i == 8) {
        boxes[i].style.backgroundColor = 'Green';
    }
    
    if(i == 16) {
        boxes[i].style.backgroundColor = 'palevioletred';

    }

    if(i%2 == 1) {
        boxes[i].style.backgroundColor = 'Lime'
    }
}

