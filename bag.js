let bagItemObjs;
onLoad();
function onLoad(){
    loadBagItemsObjs();
    displayBagItems();
    generateItemHtml();
}

function loadBagItemsObjs(){
    bagItemObjs = bagItems.map(itemId => {
        for (let i = 0; i < item.length; i++) {
            if(itemId == item[i].id){
                return item[i];
            }
        }
    });
    console.log(bagItemObjs);
}

function generateItemHtml(item){
     return `
         <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="./${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="${item.return_period}">
                <span class="return-period-days">14 days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromBag(${item.id});">X</div>
          </div>
    `;
}

function displayBagItems(){
    let ContainerElement = document.querySelector(".bag-items-container"); 
    let innerHTML = '';
    bagItemObjs.forEach(bagItem => {
        innerHTML += generateItemHtml(bagItem);
    });
    ContainerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  loadBagItemsObjs();
  displayBagItems();
  displayBagCount();
}