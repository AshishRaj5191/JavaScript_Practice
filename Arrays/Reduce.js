let arr = [2,4,6,8,100];

const even_sum = arr.reduce((acc, arr)=>{
    return acc + arr;
}, 0);

console.log(even_sum);