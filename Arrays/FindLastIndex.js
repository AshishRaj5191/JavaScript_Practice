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

//We want to get the index of the last failing_student.

let last_failing_student_index = arr.findLastIndex((ele) =>{
    if(ele.marks < 33) {
        return true;
    }
    else false;
});

console.log(last_failing_student_index);
