function myFunction() {
  var view = document.getElementById('info');

  if(view.style.display === 'none'){
    view.style.display = 'block';
  }
  else{
    view.style.display = 'none';
  }
}

function colorFunction() {
  var imgSrc = document.querySelector("#imgClr");

  var color = document.querySelector("#color").value;

  if(color === "black"){
    imgSrc.src = "adult.png";
  }
  else if(color === "red"){
    imgSrc.src = "baby.png";
  }
  else{
    imgSrc.src = "adult.png";
  }
}