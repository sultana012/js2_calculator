var d = document.getElementById("display");

function Numclick(x){
    d.value =d.value + "" +x; 
}
var op = "";
var firstValue = "";
function Sum(){
    op = "sum";
    firstValue =  d.value;
    Clr();
}
function Sub(){
    op = "sub";
    firstValue =  d.value;
    Clr();
}
function Mul(){
    op = "mul";
    firstValue =  d.value;
    Clr();
}
function Div(){
    op = "div";
    firstValue =  d.value;
    Clr();
}

function Equal(){
    SecondValue = d.value;
    SecondValue = parseInt(SecondValue)
    firstValue = parseInt(firstValue)
    if(op == "sum"){d.value = firstValue + SecondValue;}
    if(op == "sub"){d.value = firstValue - SecondValue;}
    if(op == "mul"){d.value = firstValue * SecondValue;}
    if(op == "div"){d.value = firstValue / SecondValue;}
}
function Clr(){
    d.value = "";
}