
//goes with index2-3 solves question 4 
function validateForm() {
    let x = document.forms["form"]["pass"].value;
    if (x != 12345678) {
      alert("Password incorrect");
      document.querySelector("h1").innerText = "You are not correct"
      return false;
    }
    else
    {
        document.querySelector("h1").innerText = "You are correct"
        return false;
    }
  }