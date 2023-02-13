// ............ Global Variables

let vacantId = [];
let existingId = [];

function checkDeleteId() {
	let getTodoId = document.querySelector(".tasks #todo4");
	return getTodoId.id;
}

//  ............. end of Global Variables .....

// alert('connected');

// selecting by getid
let getBody = document.getElementById("body");
// console.log(getBody);
// getBody.style.backgroundColor='black';
// getBody.style.color='white';

// selectiing by class

let getNav = document.getElementsByClassName("nav");

// selecting by tagname

let getLiTags = document.getElementsByTagName("li");
// console.log(getLiTags);

// get by queryselector

let getOneLi = document.querySelector("li");
// console.log(getOneLi);

// set by queryselectorall

let getAllLi = document.querySelectorAll("li");
// console.log(getAllLi);
let i = 0;
getAllLi.forEach((x) => {
	i++;
	// console.log('each li: ', x.firstElementChild.textContent);
	if (i == 2) {
		// x.firstElementChild.innerHTML='swimming';
	}
	if (i == 3) {
		// x.firstElementChild.innerHTML='Dancing';
	}
});

// add events

let getThemeBtn = document.querySelector(".nav button");
// console.log(getThemeBtn);

getThemeBtn.addEventListener("click", (e) => {
	// console.log('You clicked me!');
	//     getBody.style.backgroundColor='black';
	// getBody.style.color='white';
	// console.log(e.target)
	// getBody.classList.toggle('darkMode');
});

// getBody.addEventListener('click', (e)=> {
//     console.log(e.target.className);
// })

// keyup event

let lastInput = document.querySelector(".lastForm input");
// prevent default submint
let lastForm = document.querySelector(".lastForm");
lastForm.addEventListener("submit", (e) => {
	e.preventDefault();
});
// console.log(lastInput);

lastInput.addEventListener("keyup", (e) => {
	// e.preventDefault(e);
	let getLastInputVal = lastInput.value;
	console.log(getLastInputVal);
});

// change event

let getSelect = document.querySelector("#country");
getSelect.addEventListener("change", (e) => {
	let selectedOption = getSelect.value;
	// console.log(getSelect.value);
	switch (selectedOption) {
		case "nig":
			console.log("nigerian color");
			break;
		case "sa":
			console.log("south-african color");
			break;
		case "spa":
			console.log("spanish color");
			break;
		case "nig":
			console.log("nigerian color");
			break;
		case "egy":
			console.log("egyptian color");
			break;
		default:
	}
});
// console.log(getSelect);

// task one: add a text to the header
let d = new Date();
let date = d.toDateString().split(" ");

// console.log(date.split(" "));
// console.log(date);

let getHeader = document.querySelector(".nav h1");
getHeader.innerHTML += `for  ${date[0]}, ${date[2]} ${date[1]} ${date[3]}`;
// console.log(getHeader.innerHTML);

// task two: toggle theme between dark and white

let getThemeBtn1 = document.querySelector(".nav button");
getThemeBtn1.addEventListener("click", (e) => {
	getBody.classList.toggle("darkMode");
	if (getBody.className === "darkMode") {
		getThemeBtn1.innerHTML = "Dark Theme";
	} else {
		getThemeBtn1.innerHTML = "Light Theme";
	}
	// console.log(getBody.className);
});
// console.log(getThemeBtn1);

// task three: activate the search tasks mode

let getSearchInput = document.querySelector(".search input");
getSearchInput.addEventListener("keyup", () => {
	let getSearchInputValue = getSearchInput.value;
	let lowerCaseInputs = String(getSearchInputValue).toLowerCase();
	console.log(lowerCaseInputs);

	let getAllTaskLi = document.querySelectorAll(".tasks li");
	// console.log(getAllTaskLi);

	getAllTaskLi.forEach((x) => {
		if (
			x.firstElementChild.textContent.toLowerCase().indexOf(lowerCaseInputs) !==
			-1
		) {
			//    console.log('true');
			//    console.log(x.firstElementChild.parentElement);
			x.firstElementChild.parentElement.style.display = "flex";
		} else {
			// console.log('false');
			// console.log(x.firstElementChild.parentElement);
			x.firstElementChild.parentElement.style.display = "none";
		}
		// console.log(x.firstElementChild.textContent);
	});
});
// console.log(getSearchInput);

showExistingTodo();

// task four: deleting task;

let getTaskOl = document.querySelector(".tasks ol");
getTaskOl.addEventListener("click", (e) => {
	// console.log(e.target.className);
	// console.log(e.target.parentElement);
	if (e.target.className === "delete") {
		localStorage.removeItem(`todo${e.target.id}`);
		//    console.log('You have deleted a task with id of : ',e.target.id);
		e.target.parentElement.style.display = "none";
	}
});
// console.log(getTaskOl);

// task five: add new tasks
let getAddTaskForm = document.querySelector(".addTask");

let getAddTasksInput = document.querySelector(".addTask input");
getAddTaskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// creating new tags
	// console.log(findTodos('milky'));
	findTodos("todo");
	newTasks(vacantId[0], getAddTasksInput.value);
	localStorage.setItem(`todo${vacantId[0]}`, String(getAddTasksInput.value));
	// console.log(addTasksToOl);
	// reset form
	getAddTaskForm.reset();
	// console.log(getAddTasksInput.value);
});
// console.log(getAddTaskForm);

function newTasks(a, b) {
	let newLi = document.createElement("li");
	let newSpan1 = document.createElement("span");
	let newSpan2 = document.createElement("span");
	// add class where needed
	newSpan2.classList.add("delete");
	newSpan2.setAttribute("id", `${a}`);
	// adding a none-dynamic text
	newSpan2.innerHTML = "Delete";
	// rearranging
	newLi.appendChild(newSpan1);
	newLi.appendChild(newSpan2);
	// console.log('newLi is: ', newLi);
	// add inputs to newspan1
	// newSpan1.innerHTML= getAddTasksInput.value;
	newSpan1.innerHTML = b;
	newSpan1.style.textTransform = "capitalize";
	// get tasks ol and append newLi as it's child
	let addTasksToOl = document.querySelector(".tasks ol");
	addTasksToOl.appendChild(newLi);
}

// make added todo stay on refresh

localStorage.setItem("tod1", "used for testging1");
console.log(localStorage.getItem("tod1"));
localStorage.setItem("milky8", "final testing");

// delete intended todo

function findTodos(a) {
	let todo;
	let j = 0;
	for (i = 1; i < 100; i++) {
		j = a + i;
		// console.log('j key is : ', j);
		// console.log('j value is : ', localStorage.getItem(String(j)));
		todo = localStorage.key(i);
		// console.log('todo: ', todo);
		if (localStorage.getItem(String(j)) != null) {
			// console.log('i is now : ', i);
			// console.log(' found a key match................');
			existingId.push(i);
		} else {
			vacantId.push(i);
		}

		if (todo == null) {
			break;
		}
	}

	return vacantId;
}

// show available tasks
function showExistingTodo() {
	findTodos("todo");
	// console.log('existing is : ', existingId);
	for (let i = 0; i < existingId.length; i++) {
		newTasks(
			existingId[i],
			String(localStorage.getItem(`todo${existingId[i]}`))
		);
	}
}
