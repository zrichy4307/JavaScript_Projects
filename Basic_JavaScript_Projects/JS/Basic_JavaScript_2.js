function text_color() {
    var str = "This text is blue";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_text").innerHTML = result;
}

function button() {
    var str = "Thanks for hovering on my button";
    document.getElementById("Button").innerHTML = str;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}