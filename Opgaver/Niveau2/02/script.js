
let cart = {};


function updateCart() {
    let totalAmount = 0; 
    const cartItems = document.getElementById('cartItems'); 
    cartItems.innerHTML = ''; 


    for (let product in cart) {
        let item = cart[product]; 
        if (item.quantity > 0) { 
            totalAmount += item.quantity * item.price; 
            let li = document.createElement('li'); 
            li.textContent = `${product}: ${item.quantity} (Total: ${item.quantity * item.price} DKK)`; 
            cartItems.appendChild(li); 
        }
    }

    const totalDisplay = document.getElementById('totalAmount');
    totalDisplay.textContent = `Total amount: ${totalAmount} DKK`;
}


document.querySelectorAll('figure').forEach(function(figure) {
    const productName = figure.querySelector('figcaption').textContent.split(' ')[0]; 
    const priceText = figure.querySelector('figcaption span').textContent; 
    const price = parseInt(priceText.replace(/\D/g, ''));
    const amountInput = figure.querySelector('.amount'); 


    cart[productName] = { quantity: 0, price: price };


    figure.querySelector('.addToCart').addEventListener('click', function() {
        cart[productName].quantity++; 
        amountInput.value = cart[productName].quantity; 
        updateCart(); 
    });


    figure.querySelector('.removeFromCart').addEventListener('click', function() {
        if (cart[productName].quantity > 0) { 
            cart[productName].quantity--; 
            amountInput.value = cart[productName].quantity; 
            updateCart(); 
        }
    });
});