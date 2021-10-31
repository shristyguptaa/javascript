<!DOCTYPE html>
<html>
<body>
  <h1 style="text-align:center; color: blue;">Student Registration Form</h1>
  <p>Name of the applicant:</p>
    <form>
  <label>First name:</label><br>
  <input type="text" id="Firstname" name="Firstname"><br>
  <label>Last name:</label><br>
  <input type="text" id="Lastname" name="Lastname"><br>
  <label>Date of Birth:</label><br>
  <input type="date" id="DateofBirth" name="DateofBirth"><br>
  <label>Gender:</label>
  <input type="radio" id="Male" name="Gender" value="Male">
  <label for="Male">Male</label>
  <input type="radio" id="Female" name="Gender" value="Female">
  <label for="Female">Female</label><br>
  
<br></form> 

<button type="button" onclick='document.getElementById("demo").innerHTML ="Your name is "+Firstname.value + " " +Lastname.value;
document.getElementById("demo2").innerHTML ="Your Date of Birth is "+DateofBirth.value'>Submit</button>
<p id="demo"></p>
<p id="demo1"></p>
<p id="demo2"></p>
</body>
</html>
