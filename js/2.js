const products = [
    { id: 1, name: 'телефон', price: 8100 },
    { id: 2, name: 'Монітор', price: 3200 },
    { id: 3, name: 'Кресло', price: 5300 },
];

function getProductDetails(productId, successCallback, errorCallback) {
    const product = products.find(p => p.id === productId);
    
    if (product) {
        successCallback(product);
    } else {
        errorCallback('Product not found');
    }
}

function onSuccess(product) {
    const outputDiv = document.getElementById('2');
    outputDiv.innerHTML = `<p>Product Name: ${product.name}</p><p>Price: $${product.price}</p>`;
}

function onError(errorMessage) {
    const outputDiv = document.getElementById('2');
    outputDiv.innerHTML = `<p style="color: red;">Error: ${errorMessage}</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    getProductDetails(1, onSuccess, onError);
});

