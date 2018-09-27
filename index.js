
var coll = document.getElementsByClassName("collapsible");
var i;

console.log(coll.length);

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() 
    {
        this.classList.toggle("active");
        var textBox = this.nextElementSibling;
        if (textBox.style.display === "block") 
        {
        textBox.style.display = "none";
        } else 
        {
        textBox.style.display = "block";
        }
    });
 }
