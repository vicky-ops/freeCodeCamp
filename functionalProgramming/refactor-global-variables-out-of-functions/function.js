// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Refactor Global Variables Out of Functions
// Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.
// Change code below this line
// function add (bookList,bookName) {
//   let newbookList=[...bookList]
//   newbookList.push(bookName);
//   return newbookList;
  
//   // Change code above this line
// }
// alternate solution to function add
function add(list,bookname){
    return [...list,bookname]
}

// Change code below this line
// function remove (bookList,bookName) {
//   let newbookList=[...bookList]
//   const book_index = newbookList.indexOf(bookName);
//   if (book_index >= 0) {

//     newbookList.splice(book_index, 1);
//     return newbookList;

//     // Change code above this line
//     }
// }
// alternate solution to function remove
function remove(list,bookname){
    return list.filter(book=>book!=bookname)
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);