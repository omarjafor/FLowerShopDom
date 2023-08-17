let total = 0;
function handleCLikBtn(target){
    const selectedItem = document.querySelector('#selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    const p = document.createElement('p');
    p.innerText = itemName;
    selectedItem.appendChild(p);
    const price = parseInt(target.parentNode.childNodes[5].innerText.split(' ')[1]);
    total = total + price;
    console.log(total);
}