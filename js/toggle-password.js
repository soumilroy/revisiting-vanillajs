let checkbox = document.querySelector("#show-passwords");
let pwdField = document.querySelector("#password");
let pwdFields = document.querySelectorAll('input[type="password"]');

// checkbox.addEventListener("click", function (e) {
//   if (this.checked) {
//     pwdField.setAttribute("type", "text");
//   } else {
//     pwdField.setAttribute("type", "password");
//   }
// });

checkbox.addEventListener("click", function (e) {
  //   if (checkbox.checked) {
  //     pwdFields.forEach((field) => field.setAttribute("type", "text"));
  //   } else {
  //     pwdFields.forEach((field) => field.setAttribute("type", "password"));
  //   }

  for (let password of pwdFields) {
    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (checkbox.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
});

console.log(pwdFields);
