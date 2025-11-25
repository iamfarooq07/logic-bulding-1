console.log("Connected JavaScript");

const form = document.getElementById("form");
const input = document.getElementById("input");
const addTodo = document.getElementById("addTodo");
const btn = document.getElementById("btn");

let editMode = false;
let currentSpan = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valInput = input.value.trim();

    if (valInput === "") {
        alert('Search Value are Not Found');
        return;
    }
    if (editMode === true) {
        currentSpan.innerText = valInput;

        editMode = false;
        currentSpan = null;
        input.value = "";
        return;
    }

    const li = document.createElement("li");
    li.className = "bg-gray-900 mt-2 text-white p-4 text-xl font-bold rounded-2xl flex justify-between items-center";
    li.innerHTML = `
        <span class="span">${valInput}</span>
        <div class="flex gap-3">
            <button class="edit bg-green-500 px-4 py-2 rounded">Edit</button>
            <button class="delete bg-red-500 px-4 py-2 rounded">Delete</button>
        </div>
    `;


    addTodo.appendChild(li);
    input.value = "";
});


addTodo.addEventListener('click', (e) => {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        return;
    }


    if (e.target.classList.contains("edit")) {
        const text = e.target.parentElement.parentElement;
        const span = text.querySelector("span");

        input.value = span.innerText;


        editMode = true;
        currentSpan = span;
    }

});
