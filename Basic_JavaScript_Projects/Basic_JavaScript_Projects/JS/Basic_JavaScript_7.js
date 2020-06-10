var x = 15;
function Add_Function1() { //This is part 1 of the global variable x
    document.write(x-4 + "<br>");
}

function Add_Function2() { //This is part 2 of the global variable x
    document.write(x+4);
}
Add_Function1();
Add_Function2();

function Add_Function3() { //This is a local variable
    var y = 32;
    document.write(y*4);
}
Add_Function3();

function Add_Function_Broke() { //This is the intentional error function
    document.write(y+17);
}
Add_Function_Broke();

function get_Date() { //Example of an if statement using time of day
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML = "Is it time to eat yet?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var reply;
    if (Time<12 == Time>0) {
        Reply = "It is morning time!";
    }
    else if (Time>12 == Time<18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}