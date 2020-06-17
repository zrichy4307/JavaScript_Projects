function Team_Function() {
    var Team_Output;
    var Teams = document.getElementById("Team_Input").value;
    var Team_String = "The SuperBowl champions will be the ";
    switch(Teams) {
        case "Chicago Bears":
            Team_Output = Team_String + " Chicago Bears";
        break;
        case "Baltimore Ravens":
            Team_Output = Team_String + " Baltimore Ravens";
        break;
        case "Tampa Bay Buccaneers":
            Team_Output = Team_String + " Tampa Bay Buccaneers";
        break;
        case "Kansas City Chiefs":
            Team_Output = Team_String + " Kansas City Chiefs";
        break;
        case "New Orleans Saints":
            Team_Output = Team_String + " New Orleans Saints";
        break;
        default:
            Team_Output = "Please enter a team exactly as written on the list above.";
    }
    document.getElementById("Champion").innerHTML = Team_Output;
}

function class_Function() {
    var A = document.getElementsByClassName("Test");
    A[1].innerHTML = "Congratulations on clicking the button";
}

function myCanvas() { //Adding an image inside a canvas border
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("Picture");
    ctx.drawImage(img,10,10);
}

var b = document.getElementById("Gradiant");
var btx = b.getContext("2d");
//create a gradient
var grd = xtx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);