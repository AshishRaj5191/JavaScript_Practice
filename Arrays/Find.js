let arr = [
    {
        first_name: "Ashish",
        marks: 90,
    },
    {
        first_name: "Alok",
        marks: 40,
    },
    {
        first_name: "Keshav",
        marks: 20,
    },
    {
        first_name: "Prince",
        marks: 32,
    },
    {
        first_name: "Utkarsh",
        marks: 70,
    },
]

let failing_student = arr.find((ele, ind) =>{
    if(ele.marks < 33)
    {
        return true;
    }
    else return false;
});

console.log(failing_student);