let arr = [1,2,3,4,5,6,7,8,9];

const [a, ...b] = arr;

// console.log(a,b);

let sum = 0;
function add(...numbers) {
    for(let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
    sum=0;
}

add(1,2,3,4);
add(1,2);
add(1,2,3,4,5,6,7,8);
add(...b);
