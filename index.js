let total = 0;

function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  li.innerText = itemName + ' = ' + price +' Taka';
  selectedItemContainer.appendChild(li);
  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;
}

// document.getElementById("").addEventListener("click", function (e) {
//     e.target
// })