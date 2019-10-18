
// Onclick = when you click
// Onchange =  when an input changes
// Onfocus = when cursor is on an input
// Onblur = when the cursor is out of an input
// Onmouseover = when you hover
// Onmouseout = when you hover out

function handleClick() {
  console.log('Clicked!');
}

function handleFormClick(event) {
  //prevents page from refreshing
  event.preventDefault();
  
  const target = event.target;
  console.log('target', target);

  const tagName = event.target.tagName;
  console.log('tagName', tagName);

  const inputValue = document.getElementById("NameInput").value
  console.log('input', inputValue);

  const newLine = document.createElement('li');
  newLine.textContent = inputValue

  const list = document.getElementById("NameLists");

  list.appendChild(newLine);
  document.getElementById('NameInput').value = ''
  
}

const handleInputChange = (event) => {
  console.log('input', event.target.value);
}

const handleFocus = () => {
  console.log('focused!');
}

const handleBlur = () => {
  console.log('blurred!');
}

const handleMouseOver = () => {
  console.log('mouse over!');
}

const handleMouseOut = () => {
  console.log('mouse out!');
}