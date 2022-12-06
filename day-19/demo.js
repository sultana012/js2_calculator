  // for loop
  var text = "";
  for( i = 0 ; i < 5 ; i++){
      text = text + "this is number"+ " " + i + "<br>";
  }
  document.getElementById("forloop").innerHTML = text;

  // while loop
  let x = 0;
  var text2 = "";
  while(x < 10){
      text2 = text2 + "this is number"+ " " + x + "<br>";
      x++;
  }
  document.getElementById("whileloop").innerHTML = text2;

  // do while
  let y = 0;
  var text3 = "";
  do{
      text3 = text3 +"the number is :"+ y +"<br>";
      y++;
      if(y == 6){
          break;
      }
  }
  while(y < 10);
  document.getElementById("dowhile").innerHTML =text3;


//start: calculator js