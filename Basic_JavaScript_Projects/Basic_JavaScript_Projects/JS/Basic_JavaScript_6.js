function Age_Function() {
    var Age, Can_watch;
    Age=document.getElementById("Age").value;
    Can_watch=(Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Movie").innerHTML=Can_watch + " for this movie.";
}


function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " for this ride.";
}

function Voting_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Vote").value;
    Can_vote=(Age<18) ? "You are not yet old enough":"You are old enough";
    document.getElementById("Voter").innerHTML=Can_vote + " to vote.";
}

function Nested_Function() {
    document.getElementById("Count").innerHTML = Nest();
    function Nest() {
        var First_Number = 20;
        function Plus_two() {First_Number += 2;}
        Plus_two();
        return First_Number;
    }
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Blue");
var Emily = new Vehicle("Jeep", "Wrangler", 2020, "Silver");
var Erik = new Vehicle("Ford", "F-150", 2019, "Grey");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a "+ Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Clothes (Type, Size, Color) {
    this.Clothes_Type = Type;
    this.Clothes_Size = Size;
    this.Clothes_Color = Color;
}
var Jack = new Clothes("Jeans", "Large", "Blue");
var Emily = new Clothes("Dress", "Small", "Yellow and Grey");
var Erik = new Clothes("Shirt", "Large", "Grey");
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Erik got a "+ Erik.Clothes_Size + " Button down " + Erik.Clothes_Type +
    " and it was " + Erik.Clothes_Color;
}