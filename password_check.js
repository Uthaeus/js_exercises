
console.log("Welcome!");

let ans = prompt("who goes there?", "");

if (ans == 'Admin') {
  let password = prompt("Please enter password", "");
  if (password == null) {
    alert("Canceled");
  } else if (password == "TheMaster") {
    alert("Welcome!");
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don't know you");
}


