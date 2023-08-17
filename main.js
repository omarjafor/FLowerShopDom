let total = 0;
function handleCLikBtn(target){
    const selectedItem = document.querySelector('#selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    const p = document.createElement('p');
    const price = parseInt(target.parentNode.childNodes[5].innerText.split(' ')[1]);
    p.innerText = itemName + ' = ' + price +' Taka';
    selectedItem.appendChild(p);
    total = total + price;
    document.getElementById('total').innerText = total;
    const discount = parseInt(document.getElementById('disc').innerText);
    document.getElementById('grandTotal').innerText =  total - discount;
}