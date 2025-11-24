console.log("Connected JavaScript");

const form = document.getElementById("form");
const input = document.getElementById("input");
const addTodo = document.getElementById("addTodo");
const btn = document.getElementById("btn");

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let valInput = input.value.trim();
    let li = document.createElement("li");
    console.log(li);

    if (valInput === "") {
        alert('Search Value are Not Found');
        return;
    }

    li.className = "bg-gray-900 mt-2 text-white p-4 text-xl font-bold rounded-2xl flex justify-between items-center";
    li.innerHTML = `
        <span>${valInput}</span>
        <div class="flex gap-3">
            <button class="bg-green-500 px-4 py-2 rounded">Edit</button>
            <button class="bg-red-500 px-4 py-2 rounded">Delete</button>
        </div>
    `;


    addTodo.appendChild(li);
    input.value = "";
});
