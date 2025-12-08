const cart = [
  { menu: "latte", price: 3000, quantity: 1, stock: 15 },
  { menu: "capuchino", price: 4500, quantity: 2, stock: 5 },
  { menu: "Iced Americano", price: 2500, quantity: 1, stock: 8 },
  { menu: "Orange Ade", price: 3200, quantity: 2, stock: 20 },
];

function mission10(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const price = item.stock < 10 ? item.price * 0.8 : item.price;
    total += price * item.quantity;
  }
  return total;
}

console.log(mission10(cart));
