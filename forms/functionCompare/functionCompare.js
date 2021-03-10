function compare(pass1, pass2) {
  newPassword == pass1
  confirmPassword == pass2
  if (newPassword == confirmPassword) {
  console.log("True") 
} else {
  console.log("False")
 }
}

let newPassword = prompt("What is your new password?")
let confirmPassword = prompt("Confirm your new password!")
let passwordConfirmation = compare(newPassword, confirmPassword)