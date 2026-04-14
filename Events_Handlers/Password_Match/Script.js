let signup_form = document.getElementById('signup');
let pass = document.getElementById('pass');
let confirm_pass = document.getElementById('confirm_pass');
let msg = document.getElementById('message');

signup_form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(pass.value === confirm_pass.value) {
        // msg.textContent
        msg.innerText = "Passwords match ✔️";
        msg.style.color = 'green';
    } else {
        msg.innerText = "Passwords do not match ❌";
        msg.style.color = 'red';
    }
});