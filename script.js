const list = document.querySelector("ul");

const valueArr = [];

setInterval(generateBars, 1000);
function generateBars() {
  let costumers = Math.floor(Math.random() * 100);

  valueArr.push(costumers);

  console.log(valueArr);

  //her laver jeg et li element
  const newData = document.createElement("li");
  newData.style.setProperty("--height", costumers);

  //her vælger jeg det første barn i ul
  const oldData = document.querySelector("ul").firstChild;

  list.appendChild(newData);

  if (valueArr.length > 19) {
    valueArr.shift();
    //her fjerner jeg så det første barn med remove child
    document.querySelector("ul").removeChild(oldData);
  }
}
