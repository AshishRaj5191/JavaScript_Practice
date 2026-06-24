let originalUser = {
    name: 'Ashish',
    age: 28,
    address: {
        city: 'Pune',
        pincode: 411001,
    }
};

// let deepCopiedUser = structuredClone(originalUser);

let deepCopiedUser = JSON.parse(JSON.stringify(originalUser));

deepCopiedUser.address.city = 'Delhi';

console.log(originalUser.address.city);
console.log(deepCopiedUser.address.city);
