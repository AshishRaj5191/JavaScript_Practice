let pass = document.getElementById("password");
let toggle_checkbox = document.getElementById("toggleCheckbox");

toggle_checkbox.addEventListener("change", () => {
  if (toggle_checkbox.checked == true) {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
});
