function full_Sentence() { //Concatenated these 4 variables into one senctence
    var part1 = "This is";
    var part2 = " me attempting";
    var part3 = " to concatenate these";
    var part4 = " words into a sentence";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //sliced the sentence at location 27 and 33
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

function upperCase() { //made hello world show up as all capitals
    var str = "hello world!";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

function mySearch() { //used a search to show the location of a word in a sentence
    var str = "I am going to pick out a word to search for";
    var n = str.search("going");
    document.getElementById("search").innerHTML = n;
}

function string_Method() { //made variable X show as a string
    var X = 150;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //shortened variable X to only 8 digits
    var X = 14569.159786432458;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

function fixed_Method() { //Made variable X a specific number of decimals
    var X = 14569.159786432458;
    document.getElementById("Fixed").innerHTML = X.toFixed(3);
}

function primitive_Method() { //used to find primitive value of string
    var str = "The primitive method";
    var res = str.valueOf();
    document.getElementById("Primitive").innerHTML = res;
}