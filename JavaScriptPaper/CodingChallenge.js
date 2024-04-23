let currentBooks = [
  {title: 'Peter Pan', author: 'James Matthew Barrie', genre: 'Fiction', quantityInStock: 10},
  {title: 'Alice in Wonderland', author: 'Lewis Carroll', genre: 'Fiction', quantityInStock: 17},
  {title: 'Aristocats', author: 'Tom McGowan', genre: 'Fiction', quantityInStock: 80},
  {title: 'Black Beauty', author: 'Anna Sewell', genre: 'Fiction', quantityInStock: 11},
]
let newBook= {name: 'Bambi', author: 'Felix Salten', genre: 'Fiction', quantityInStock: 39}

function addNewBook(currentBooks, newBook){
  if (!currentBooks.some(book => book.title === newBook.title)) {
    currentBooks.push(newBook)
    console.log('You book has been added to the collection')
  } else {
    console.log('This book is already in your collection')
  }
}

function updateQuantity(currentBooks, bookTitle, newQuantity) {
  const bookIndex = currentBooks.findIndex(book => book.title === bookTitle);
  if (bookIndex !== -1) {
    currentBooks[bookIndex].quantityInStock = newQuantity;
    console.log(`Quantity of ${bookTitle} updated to ${newQuantity}`);
  } else {
    console.log(`${bookTitle} not found in your collection`);
  }
}

function collectionInfo(currentBooks){
    const bookDetails = currentBooks.map(book => {
    return `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Quantity in stock: ${book.quantityInStock}`
  })
  console.log(bookDetails.join("\n"))
}

addNewBook(currentBooks, newBook);
updateQuantity(currentBooks, 'Peter Pan', 105);
collectionInfo(currentBooks);