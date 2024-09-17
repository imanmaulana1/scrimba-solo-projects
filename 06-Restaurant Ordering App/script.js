const menuArray = [
  {
    name: 'Pizza',
    ingredients: ['pepperoni', 'mushrom', 'mozarella'],
    id: 0,
    price: 14,
    emoji: '🍕',
  },
  {
    name: 'Hamburger',
    ingredients: ['beef', 'cheese', 'lettuce'],
    price: 12,
    emoji: '🍔',
    id: 1,
  },
  {
    name: 'Beer',
    ingredients: ['grain, hops, yeast, water'],
    price: 12,
    emoji: '🍺',
    id: 2,
  },
];

let objMenu = [];
let uniqueIdCounter = 0;
let username = '';

function createMenus() {
  const menus = document.createElement('section');
  menus.classList.add('menus');

  menuArray.forEach((item, index) => {
    const articleItem = document.createElement('article');
    articleItem.classList.add('item');

    const itemEmoji = document.createElement('span');
    itemEmoji.classList.add('item-graphic');
    itemEmoji.textContent = item.emoji;

    const itemContent = document.createElement('div');
    itemContent.classList.add('item-content');

    const itemName = document.createElement('h2');
    itemName.classList.add('item-title');
    itemName.textContent = item.name;

    const itemDesc = document.createElement('p');
    itemDesc.classList.add('item-description');
    itemDesc.textContent = item.ingredients.join(', ');

    const itemPrice = document.createElement('h3');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `$${item.price}`;

    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('item-cta');
    buttonAdd.textContent = '+';
    buttonAdd.addEventListener('click', () => {
      addMenu(item.id);
    });

    itemContent.appendChild(itemName);
    itemContent.appendChild(itemDesc);
    itemContent.appendChild(itemPrice);

    articleItem.appendChild(itemEmoji);
    articleItem.appendChild(itemContent);
    articleItem.appendChild(buttonAdd);
    menus.appendChild(articleItem);
  });

  document.querySelector('main').appendChild(menus);
}

function renderOrderItem() {
  let orderWrapper = document.querySelector('.order-wrapper');
  let totalWrapper = document.querySelector('.total-wrapper');

  if (!orderWrapper) {
    orderWrapper = document.createElement('section');
    orderWrapper.classList.add('order-wrapper');

    const orderTitle = document.createElement('h2');
    orderTitle.classList.add('order-title');
    orderTitle.textContent = 'Your Order';

    orderWrapper.appendChild(orderTitle);
    document.querySelector('main').appendChild(orderWrapper);
  }

  let orderItems = orderWrapper.querySelector('.order-item-wrapper');

  if (!orderItems) {
    orderItems = document.createElement('ul');
    orderItems.classList.add('order-item-wrapper');
    orderWrapper.appendChild(orderItems);
  }

  let listItem = '';

  objMenu.forEach((item) => {
    listItem += `
         <li class="order-item">
            <header class="order-item-header">
              <h3 class="item-title">${item.name}</h3>
              <button class="order-item-remove-btn" onclick="removeMenu(${item.uniqueId})">Remove</button>
            </header>
            <h4 class="item-price">$${item.price}</h4>
          </li>
    `;
  });

  orderItems.innerHTML = listItem;

  if (!totalWrapper) {
    totalWrapper = document.createElement('section');
    totalWrapper.classList.add('total-wrapper');

    const totalPriceLabel = document.createElement('h2');
    totalPriceLabel.classList.add('total-price-title');
    totalPriceLabel.textContent = 'Total price: ';

    const totalPrice = document.createElement('h3');
    totalPrice.classList.add('item-price');
    totalWrapper.appendChild(totalPriceLabel);
    totalWrapper.appendChild(totalPrice);

    const btnPayment = document.createElement('button');
    btnPayment.classList.add('btn-payment');
    btnPayment.textContent = 'Complete order';
    btnPayment.addEventListener('click', showModal);
    totalWrapper.appendChild(btnPayment);

    document.querySelector('main').appendChild(totalWrapper);
  }

  const totalPriceElement = totalWrapper.querySelector('.item-price');
  totalPriceElement.textContent = `$${calculateTotalPrice().toFixed(0)}`;

  if (objMenu.length < 1) {
    orderWrapper.remove();
    totalWrapper.remove();
  }

  const successMsg = document.createElement('p');
  successMsg.classList.add('success');
  successMsg.style.display = 'none';
  successMsg.textContent = `Thanks, ${username}! Your order is on its way!`;

  document.querySelector('main').appendChild(successMsg);
}

function addMenu(id) {
  const order = menuArray.find((item) => item.id === id);
  const uniqueOrder = { ...order, uniqueId: uniqueIdCounter++ };

  objMenu.push(uniqueOrder);

  renderOrderItem();
}

function removeMenu(id) {
  objMenu = objMenu.filter((item) => item.uniqueId !== id);

  renderOrderItem();
}

function calculateTotalPrice() {
  return objMenu.reduce((total, item) => total + item.price, 0);
}

function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

document.getElementById('myform').addEventListener('submit', function (e) {
  e.preventDefault();

  username = document.getElementById('name').value;
  if (username) {
    const totalWrapper = document.querySelector('.total-wrapper');
    const orderWrapper = document.querySelector('.order-wrapper');
    const successMsg = document.querySelector('.success');

    // Close the modal and update the UI
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    totalWrapper.style.display = 'none';
    orderWrapper.style.display = 'none';
    successMsg.style.display = 'block';
    successMsg.textContent = `Thanks, ${username}! Your order is on its way!`;
  } else {
    alert('Please enter your name');
  }
});

document.addEventListener('DOMContentLoaded', createMenus);
