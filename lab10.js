function add(){
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);
  var result =  num1 + num2;
  document.write("<center><br><br><br><b><U>Module Ten - Javascript III</U></b>" + "<br><br><br>Your Results:<br><br>");
  document.write(num1);
  document.write(" + ");
  document.write(num2);
  document.write(" = ");
  document.write(result);
  document.write("<br><br><button onClick=\"window.location.reload()\";>Try Again</button></center>")
}

function subtract(){
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);
  var result =  num1 - num2;
  document.write("<center><br><br><br><b><U>Module Ten - Javascript III</U></b>" + "<br><br><br>Your Results:<br><br>");
  document.write(num1);
  document.write(" - ");
  document.write(num2);
  document.write(" = ");
  document.write(result);
  document.write("<br><br><button onClick=\"window.location.reload()\";>Try Again</button></center>")
}

function multiply(){
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);
  var result =  num1 * num2;
  document.write("<center><br><br><br><b><U>Module Ten - Javascript III</U></b>" + "<br><br><br>Your Results:<br><br>");
  document.write(num1);
  document.write(" * ");
  document.write(num2);
  document.write(" = ");
  document.write(result);
  document.write("<br><br><button onClick=\"window.location.reload()\";>Try Again</button></center>")
}

function divide(){
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);
  var result =  num1 / num2;
  document.write("<center><br><br><br><b><U>Module Ten - Javascript III</U></b>" + "<br><br><br>Your Results:<br><br>");
  document.write(num1);
  document.write(" / ");
  document.write(num2);
  document.write(" = ");
  document.write(result);
  document.write("<br><br><button onClick=\"window.location.reload()\";>Try Again</button></center>")
}
