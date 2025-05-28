  const addButton = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", function () {
    const text = taskInput.value.trim();
    if (text === "") {
      alert("please enter a task to add");
      return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    // Toggle done class on click
    li.addEventListener("click", function () {
     li.classList.toggle("done");
li.classList.contains("done") ? li.classList.add("ticked") : li.classList.remove("ticked");

    });

    // ✅ Create a new delete button for this task only
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "remove";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    // Remove task on delete button click
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent li's click
      li.remove();
    });

    // Append the task item to the list
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = "";
  });
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addButton.click();
    }
  });
