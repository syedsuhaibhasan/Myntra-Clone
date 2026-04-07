let itemsContainerElement = document.querySelector('.items-container');

let item = {
    item_image: 'images/1.jpg',
    rating: {
        stars: 4.5,
        noOfReviews: 1400,
    },
    companyName: 'Carlton London',
    itemName: 'Rhodium-Plated C1 Floral',
    price: {
        currentPrice: '606',
        originalPrice: '1045',
        discount: '42'
    }
}

itemsContainerElement.innerHTML = `
        <div class="item-container">
                <img class="item-image" src="${item.item_image}" alt="failed to image load">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
                </div>
                <div class="company-name">${item.companyName}</div>
                <div class="item-name">${item.itemName}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.price.currentPrice}</span>
                    <span class="original-price">Rs ${item.price.originalPrice}</span>
                    <span class="discount">${item.price.discount}% Off</span>
                </div>
                <button class="btn-add-bag">Add to bag</button>
            </div>`;