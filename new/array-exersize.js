const book = [
   {name: 'book1', price: 450, rating: 4.2},
   {name: 'book2', price: 470, rating: 4.1},
   {name: 'book3', price: 350, rating: 3.2},
   {name: 'book4', price: 600, rating: 4.5},
]

// take all books with price less than 500 and rating gratter than 4
const pickOne = book.filter((book) => {
   return book.price < 500 && book.rating > 4
});
console.log(pickOne);


// sort them by their rating in desending order
const sortOne = pickOne.sort((book1, book2) => {
   return book1.rating - book2.rating;
}).reverse();
console.log(sortOne);


// print their name.
const pName = sortOne.map((name) => {
   return name.name;
})
console.log(pName);

