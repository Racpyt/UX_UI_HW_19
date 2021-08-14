function firstFunction() {
    var txt;
    var person = prompt("Please enter your full name:", "Your Name");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! Thank you for coming to check out my portfolio. Hope to connect with you soon!"
    }
    document.getElementById("test").innerHTML = txt;
}