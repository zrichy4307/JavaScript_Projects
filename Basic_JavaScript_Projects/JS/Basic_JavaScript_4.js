function my_Dictionary() {
    var Teams = {
        Baseball:"Cubs",
        Football:"Bears",
        Basketball:"Bulls",
        Hockey:"Blackhawks"
    };
    delete Teams.Basketball;
    document.getElementById("Dictionary").innerHTML = Teams.Basketball;
}