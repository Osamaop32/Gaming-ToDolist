function add() {
    var list = document.getElementById("list");
    var inputElement = document.getElementById("Input");
    var task = inputElement.value.trim();

    if (task === "") {
        alert("Please enter a task!");
    } else {
        list.innerHTML += `

<tr class="bg-gradient-to-r from-[#111827] via-[#172554] to-[#1e1b4b] border-b border-cyan-500/30 hover:bg-[#1e293b] transition duration-300">

    <td class="numbers p-3 text-cyan-400 font-bold">
        1
    </td>

    <td class="text-start p-3">
        <input
            type="checkbox"
            onchange="completeTask(this)"
            id="checkbox"
            class="accent-cyan-400 w-4 h-4 cursor-pointer"
        >

        <span class="task ml-2 text-white font-medium">
            ${task}
        </span>
    </td>

    <td class="text-start p-3 whitespace-nowrap">

        <button
            onclick="editTask(this)"
            class="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:shadow-[0_0_12px_#a855f7]"
        >
            ✏️ Edit
        </button>

        <button
            onclick="this.closest('tr').remove(); updateNumbers();"
            class="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:shadow-[0_0_12px_#ef4444]"
        >
            ✕ Delete
        </button>

    </td>

</tr>

        `;
        inputElement.value = "";
        updateNumbers();
    }
}

function editTask(btn) {
    var row = btn.closest("tr");
    var taskCell = row.querySelector(".task");
    var newTask = prompt("Edit your task", taskCell.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        taskCell.textContent = newTask.trim();
    }
}

function updateNumbers() {
    var rows = document.querySelectorAll("#list tr");
    rows.forEach(function (row, i) {
        var numCell = row.querySelector(".numbers");
        if (numCell) {
            numCell.textContent = i + 1;
        }
    });
}


function filterTask(){
  var search = document.getElementById('search').value.toLowerCase();

    var rows = document.querySelectorAll('#list tr');

    rows.forEach(function(row) {
        var taskCell = row.querySelector('.task').textContent.toLowerCase();
        if (taskCell) {
            if (taskCell.includes(search)) {
                row.style.display = ''; // Show the row
            } else {
                row.style.display = 'none'; // Hide the row
            }
        }
    });

}

function completeTask(checkbox){

var task = checkbox.nextElementSibling;

if(checkbox.checked){
task.style.textDecoration = 'line-through'
}else{
task.style.textDecoration = 'none';

}

}
