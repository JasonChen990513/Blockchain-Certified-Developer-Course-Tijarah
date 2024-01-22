<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>
<h3>Testing</h3>

<p id ="test">Click the button to display the date.</p>
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
<button onclick="displayDate()">The time is?</button>

<p id="demo"></p>

<img src="https://www.shutterstock.com/image-illustration/pristine-reflective-lake-show-image-260nw-2305485315.jpg" alt="just image">

<button id="reset">Change user</button>

<p>My cat is <strong>very</strong> grumpy.</p>

<ol>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ol>

<script>
let myHeading = document.querySelector("h3");
const myName = "init";
localStorage.setItem("name", myName);
myHeading.textContent = `This is init value, ${myName}`;
setUserName();

let myButton = document.querySelector("button");

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


myButton.onclick = () => {
  setUserName();
};

document.getElementById("test").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});


</script>



</body>
</html> 
