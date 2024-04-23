items =[
  {name: 'Laptop', price: 1000},
  {name: 'Headphones', price: 200},
  {name: 'Mouse', price: 200}
]

let subtotal = items.reduce((acc, item) =>
acc + item.price, 0)

const TAX_RATE = 0.1
const DISCOUNT = 0.2

let discount = subtotal * DISCOUNT
let subtotalAfterDiscount = subtotal - discount
let tax = subtotalAfterDiscount * TAX_RATE

let total = subtotal + tax;
'Total cost: $' + total.toFixed(2)

// The reducer function has been added correctly. 
// Discount / tax calculation has been optimised 

// WAY TO OPTIMISE THE CODE 
// store the items array in a const as they will not be changing
// put the tax and discount calculation in one variable to reduce lines of code
// or, put calculations in seperate functions, it would make the code easier to 
// read and would be able to exclued the discount / tax from a calculation if needed. 