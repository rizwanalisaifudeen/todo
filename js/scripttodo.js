var division1 = document.getElementById("div1");
var ul1 = document.createElement("ul");
division1.appendChild(ul1);
var a = document.getElementById("btn1");
a.addEventListener("click", handleSubmit);

function handleSubmit() {
    var inputText = document.getElementById("id1").value;
    var text1 = document.createTextNode(inputText);
    var li1 = document.createElement("li");
    li1.className = "listdo";
    var newBtn = document.createElement("button");
    ul1.appendChild(li1);
    li1.appendChild(text1);

    li1.appendChild(newBtn);
    newBtn.className = "todo1";
    newBtn.innerHTML = "Done!!!";
    newBtn.addEventListener("click", function(event) {
        event.target.parentNode.remove();
    });
}