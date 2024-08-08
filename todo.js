function intro () {
  //? selecting or targing elements

// by id
// document.action(parameter);
let bodyById = document.getElementById('body');
let searchInput = document.getElementById('input')

console.log(bodyById)
console.log(searchInput)

// by query selector

let bodyq = document.querySelector('#body');
console.log(bodyq)

let h1 = document.querySelector('h1');
console.log(h1)

let h2 = document.querySelector('.tasks h2');
console.log(h2)

/* 
target in css by
> tag name
> class
> id 
> group selector
> descendant selector
> attribute
>  psuedo-clasa and element
*/

// query selector all
let allLi = document.querySelectorAll('.tasks li');
// console.log(allLi);
allLi.forEach(li=> {
    console.log(li)
})

//? dom navigation

 let nav = document.querySelector('.nav');
//  let navH1 = document.querySelector('.nav h1');
 let navH1 =nav.firstElementChild;
 let navButton =nav.lastElementChild;
 let navParentFromChild = navButton.parentElement;
 let nextEle = navH1.nextElementSibling;
 let prevEle = navButton.previousElementSibling;

 console.log(nav)
 console.log(navH1)
 console.log(navButton)
 console.log(navParentFromChild)
 console.log(nextEle)
 console.log(prevEle)

//? getting and setting text

// to get
// elementVariableName.textContent
// console.log(bodyById.innerText)
// console.log(bodyById.textContent)
// console.log(bodyById.innerHTML)
console.log(navH1.textContent)
console.log(navH1.innerText)
console.log(navH1.innerHTML)
// to set
// elementVariableName.textContent = 'new text';
//  navH1.textContent = ' TExt';

 //? setting and changing attributes

 // adding attribje
//  html attribute; attributeName='value'
//  elementVariableName.setAttribute('attributeName','attributeValue);
 navH1.setAttribute('title','Todo List App')
 console.log(navH1,'**********************')

 // changing attriubte

 nav.setAttribute('id','Nav')

// ? adding css

// inline css
// variableName.style.cssPropertyName = 'value';
/* 
  in css 
   
  background-color: "blue";
  
  in js 
  backgroundColor= "blue";


*/
navH1.style.color = 'red'
// nav.style.backgroundColor = 'black';
// nav.style.border = '3px dashed purple';

// internal css

// nav.style.cssText = `
//   background-color: black;
//   border: 3px dashed purple;
// `

// external css
// classlist or setAttribute

nav.classList.add('newNav');
// nav.setAttribute('class','nav newNav');

//? crating elements

let li = document.createElement('li');
let span1 = document.createElement('span');
let span2 = document.createElement('span');

// add attributes
 span2.setAttribute('class','delete')
 span2.setAttribute('id','todo4')
// add text
span1.textContent = 'New Task';
span2.textContent = 'Delete';
// re arrange

// append add from bottom
li.append(span1);
li.append(span2)

// prepend adds from top

console.log(li)

// add to dom

let taskOl = document.querySelector('.tasks ol');

taskOl.prepend(li)

//? replace a child

// create the child tag
let newChild = document.createElement('a');

// add text 

newChild.textContent = 'Typescripe Lecture';

// add attribute
newChild.setAttribute('href','#');


// select the parent tag for which a child in it will be replaced

let replaceNode = document.querySelector('#todo1').parentElement;
console.log(replaceNode);

// replace the child

replaceNode.replaceChild(newChild, replaceNode.childNodes[1]);


//? remove child

// select the child or the tag
let removeNode = document.querySelector('#todo2').parentElement;

// remove it
removeNode.remove()

//? html event

function handleFirstLiClick (e) {
  console.log(e)
  alert('You Clicked Me');
}

//? dom event

/* 
  variabeName.addEventListener('eventType',function);
*/

bodyById.addEventListener('click',(e)=> {
  alert("Dom Event Activated!!")
  console.log(e.target);
})




}

//? activate dark mode

/* 
  selete body and button tag

  add event lister to button

  on click,
   > change body tag to black bg and text to white
   > change button text form Dark Mode to Light Mode
  on click age revert
*/

let body = document.querySelector('body');

let toggleButton = document.querySelector('.nav button');

// add event lister to the button

toggleButton.addEventListener('click',(e)=> {
  body.classList.toggle('darkMode');
  if(String(body.className).includes('darkMode')) {
    toggleButton.textContent = 'Light Mode';
  }else{
    toggleButton.textContent = 'Dark Mode';

  }
  console.log(body.className)
});


//? deleting task

/* 
  target select the task parent tag
  add and click event
  if the clicked tag has a class of delete
   > get the parent of  the delete
   > hide it

*/

let tasksOl = document.querySelector('.tasks ol');

// click event

tasksOl.addEventListener('click',(e)=> {
  // console.log(e.target.parentElement)
  // console.log(e.target.className)
  if(String(e.target.className).includes('delete')) {
    e.target.parentElement.style.display= 'none'
  }
})

//? add tasks

/* 
  create tast list tag with the required attributes
  select the input tag
  get the text
  add text
  add attributes
  rearrange
  add submit event to form
  add to dom
  reset form
  
*/



let addForm = document.querySelector('.addTask');
 // submit event to form

 addForm.addEventListener('submit',(e)=> {
  e.preventDefault()
   
  // create tags

 let li = document.createElement('li')
 let span1 = document.createElement('span')
 let span2 = document.createElement('span')

 // select form input
 let addInput = addForm.firstElementChild;

 // add text
 span1.textContent = addInput.value;
 span2.textContent = 'Delete';
let liCount = 3;
 // add attributes
 span2.setAttribute('class','delete');
 span2.setAttribute('id',`todo${liCount +=1}`);

 // rearrange

 li.append(span1)
 li.append(span2)

   if(String(addInput.value).length >= 2) {
     tasksOl.prepend(li);
     addForm.reset();

   }else{
    alert('Task not Meaningfull');
   }
  console.log(addInput.value)
 })
