function Addition_Function() {
    var addition= 2+4;
    document.getElementById('Math').innerHTML= "2+4="+addition;   
}

function Subtraction_Function() {
    var subtraction=17-32;
    document.getElementById("Sub").innerHTML="17-32="+subtraction;
}

function Mult_Divide_Function() {
    var md=5*5/3;
    document.getElementById("Math1").innerHTML="5 multiplied by 5 and then divided by 3="+md;
}

function modulus() {
    var remainder=15%4;
    document.getElementById("mod").innerHTML="The remainder of 15 divided by 4="+ remainder;
}


var x=5;
x++;
document.write(x);



window.alert(Math.random()*100);
