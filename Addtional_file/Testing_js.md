<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>


<p>My cat is <strong>very</strong> grumpy.</p>
<ol>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ol>

<p id="demo1">123</p>
<button id = "btn" onclick="changeText()">change after 2 second</button>

<script>
let myBtn = document.getElementById("btn");

//myBtn.
//changeText();

function changeText() {
	await delay(2000);
  	document.getElementById("demo1").innerHTML = "Done";
}

const yourFunction = async () => {
  await delay(5000);
  console.log("Waited 5s");

  await delay(5000);
  console.log("Waited an additional 5s");
};

</script>

</body>
</html> 