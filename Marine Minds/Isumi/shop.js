document.addEventListener('DOMContentLoaded', ready);

function ready() {
    const cartIcon = document.getElementById('cart-icon');
    const cart = document.querySelector('.cart');
    const closeCart = document.getElementById('close-cart');
    const buyButton = document.querySelector('.btn-buy');
    const formModal = document.getElementById('form-modal');
    const closeForm = document.getElementById('close-form');
    const addCartButtons = document.querySelectorAll('.add-cart');

    cartIcon.addEventListener('click', () => {
        cart.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cart.classList.remove('active');
    });

    addCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });

    buyButton.addEventListener('click', () => {
        formModal.style.display = 'block';
    });

    closeForm.addEventListener('click', () => {
        formModal.style.display = 'none';
    });

    formModal.addEventListener('click', event => {
        if (event.target == formModal) {
            formModal.style.display = 'none';
        }
    });

    document.getElementById('payment-form').addEventListener('submit', event => {
        event.preventDefault();
        alert('Payment successful!');
        formModal.style.display = 'none';
        clearCart();
    });
}

function addToCartClicked(event) {
    const button = event.target;
    const product = button.parentElement;
    const title = product.querySelector('.product-title').innerText;
    const price = product.querySelector('.price').innerText;
    const imageSrc = product.querySelector('.product-img').src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    const cartContent = document.querySelector('.cart-content');
    const cartItemNames = cartContent.querySelectorAll('.cart-product-title');
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already in the cart');
            return;
        }
    }

    const cartBox = document.createElement('div');
    cartBox.classList.add('cart-box');
    cartBox.innerHTML = `
        <img src="${imageSrc}" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    `;

    cartContent.appendChild(cartBox);
    cartBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
    cartBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    const cartContent = document.querySelector('.cart-content');
    const cartBoxes = cartContent.querySelectorAll('.cart-box');
    let total = 0;

    cartBoxes.forEach(box => {
        const priceElement = box.querySelector('.cart-price');
        const quantityElement = box.querySelector('.cart-quantity');
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value;
        total += price * quantity;
    });

    document.querySelector('.total-price').innerText = `$${total.toFixed(2)}`;
}

function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function clearCart() {
    const cartContent = document.querySelector('.cart-content');
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateCartTotal();
}
