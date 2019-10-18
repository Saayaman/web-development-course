
// Onclick = when you click
// Onchange =  when an input changes
// Onfocus = when cursor is on an input
// Onblur = when the cursor is out of an input
// Onmouseover = when you hover
// Onmouseout = when you hover out

console.log(location.href);

const addNewInput = (event) => {
  const inputValue = document.getElementById("listInput").value
  console.log('inputValue', inputValue);

  const target = event.target
  console.log('target', target);

  const targetTag = event.target.tagName;
  console.log('targetTag', targetTag);
}