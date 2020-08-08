/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/ */

'use strict';
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = document.createElement('ul');
document.querySelector('#bookList').appendChild(ulElement);

function createBookList(books) {
  for (let i = 0; i < books.length; i++) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    p.innerText = books[i].title + ' - ' + books[i].author;
    li.appendChild(p);
    li.appendChild(img);
    ulElement.appendChild(li);
    if (books[i].title === 'The Design of Everyday Things') {
      img.src = 'https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png';
    }
    if (books[i].title === 'The Most Human Human') {
      img.src = 'http://images3.penguinrandomhouse.com/cover/700jpg/9780307476708';
    }
    if (books[i].title === 'The Pragmatic Programmer') {
      img.src = 'https://image.ebooks.com/previews/209/209748/209748258/209748258.jpg';
    }

    if (books[i].alreadyRead === true) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
    img.style.width = '200px';
    li.style.width = '350px';
    li.style.height = '400px';
    li.style.listStyle = 'none';
    li.style.marginRight = '20px';
    li.style.padding = '8px';
    ulElement.style.display = 'flex';
    document.body.style.margin = '8px';
  }
}
ulElement = createBookList(books);

// function createBookList(books) {

//   // your code goes in here, return the ul element
// }

// const books = [{
//     title: 'The Design of Everyday Things',
//     author: 'Don Norman',
//     alreadyRead: false
//   },
//   {
//     title: 'The Most Human Human',
//     author: 'Brian Christian',
//     alreadyRead: true
//   },
//   {
//     title: 'The Pragmatic Programmer',
//     author: 'Andrew Hunt',
//     alreadyRead: true
//   }
// ];

// let ulElement = createBookList(books);

// document.querySelector("#bookList").appendChild(ulElement);
