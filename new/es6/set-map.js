/*
   ===> declare a set
   ===> add element in set
   ===> delete element in set
   ===> size of the set
   ===> travers the set
   ===> clear the set
   ===> declare a map
   ===> add an element in the map;
   ===> delete an element form a map
   ===> getting all values form a map
   ===> getting all keys form a map
   ===> getting all element form a map
   ===> check an element from map (true/ false);
   ===> clear a map
*/

// declare a set
let set = new Set ([1,2,3,4,5,5,2]);
console.log(set);

// add element in set
set.add(34);
console.log(set);

// delete element in set
set.delete(1);
console.log(set);

// size of the set
console.log(set.size);

// travers the set
for (let key of set) {
   console.log(key);
}

// clear the set
set.clear();
console.log(set)

// declare a map
const food = new Map ([
   ['mango', 'yes'],
   ['apple', 'yes'],
   ['orange', 'No'],
   ['pape', 'yes'],
])
console.log(food);

// add an element in the map;
food.set('grave', 'No');
console.log(food);

// delete an element form a map
food.delete('mango');
console.log(food);

// getting all values form a map
for (let key of food.values()) {
   console.log(key);
}

// getting all keys form a map
for (let key of food.keys()) {
   console.log(key);
}

// getting all element form a map
for (let key of food.entries()) {
   console.log(key);
}

// check an element from map (true/ false);
let find = food.has('apple');
console.log(find);

// clear a map
food.clear();
console.log(food);

