function handleCLikBtn(target){
    const selectedItem = document.querySelector('#selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    const p = document.createElement('p');
    p.innerText = itemName;
    selectedItem.appendChild(p);
}