document.getElementById("submitButton").addEventListener("click", function()
{
    console.log("called function");
    alert("Tack för din ansökan, den har nu registrerats!");

    document.getElementById("userForm").style.display = "none";
    document.getElementById("overview").style.display = "block";

    var firstName = document.getElementById("firstName").value;

    console.log(document.getElementById("firstName").value);

});