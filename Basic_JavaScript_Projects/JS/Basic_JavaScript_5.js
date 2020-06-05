document.write(typeof "3");

function Infinite() {
    document.getElementById("Infinity").innerHTML = (2E310);
}

function Infinite_minus() {
    document.getElementById("-Infinity").innerHTML = (-2E310);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_Function1() {
    document.getElementById("Not1").innerHTML = !(8>10);
}

function Age_Function() {
    var Age, Can_watch;
    Age=document.getElementById("Age").value;
    Can_watch=(Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Movie").innerHTML=Can_watch + "for this movie.";
}

console.log(5+17);

console.log(5>6);

console.log(10+5==15);

console.log(10==6);

console.log(5>4 && 6>5);

console.log(5>7 && 5>1);

console.log(5<4 || 5<6);

console.log(5<4 || 17<12);
