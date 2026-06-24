const originalUser = {
  name: "Ashish",
  age: 25,
  skills: {
    primary: "JavaScript",
    secondary: "React"
  }
};


const shallowCopyUser = { ...originalUser };

shallowCopyUser.name = "Sumit";

shallowCopyUser.skills.primary = "Python"; 

console.log("Original User Name:", originalUser.name); 

console.log("Original User Skill:", originalUser.skills.primary); 
