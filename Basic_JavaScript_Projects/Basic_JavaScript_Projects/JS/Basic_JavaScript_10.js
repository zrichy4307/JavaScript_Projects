function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<21) {
        Digit +="<br>" +X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit
}

function String_Length() {
    var str = "What is the length of this string?";
    var n = str.length;
    document.getElementById("Length").innerHTML = n;
}

var Cars = ["Volvo", "Viper", "Camaro", "F-150", "Tesla", "Mustang"];//Made a loop to display all parts of the list
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Cars.length; Y++) {
        Content += Cars[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { // Created an array function and then displayed the 2nd element of the array
    var Arrays = [];
    Arrays[0] = "Volvo";
    Arrays[1] = "Tesla";
    Arrays[2] = "F-150";
    Arrays[3] = "Mustang";
    document.getElementById("Array").innerHTML = "The car I am going to be driving is... " +
        Arrays[2] + ".";
}

function constant_function() { // Made a function with a contstant and then changed and added a constant
    const car = {Make:"Ford", Model:"F-150", Color:"Red", Year:"2020"};
    car.color = "Grey";
    car.price = "$45,000";
    document.getElementById("Constant").innerHTML = "The cost of my new " + car.color + " colored " +
        car.Make + "-" + car.Model + " was " + car.price + " before taxes.";
}

function return_Function(name) {
    return "Hello " + name;
}
document.getElementById("Return").innerHTML = return_Function("Zach");

let car = { 
    Make:"Volkswagon",
    Model: "Atlas",
    Year: "2020",
    Color: "Black",
    description : function() {
        return "Our new car is a " + this.Year + this.Make + this.Model + " and we got it in " + this.Color;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function break_Function() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
        break    
        }
    text += "The number is " + i + "<br>";   
    }
document.getElementById("break").innerHTML = text;
}

function continue_Function() {
    var text = "";
    var i;
    for (i = 0; i < 8; i++) {
        if (i === 6) {
        continue    
        }
    text += "The number is " + i + "<br>";   
    }
document.getElementById("continue").innerHTML = text;
}