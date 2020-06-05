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