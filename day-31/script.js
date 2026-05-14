let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {
    let value = input.value.trim();

    if (value === "") {
        alert("Enter something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = value;

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});
