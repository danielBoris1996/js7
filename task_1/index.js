const library = [
    'Мастер и Маргарита',
    'Гарри Поттер',
    'Над пропастью во ржи',
    'Властелин колец',
    'Дюна',
    'Отцы и дети'
]

bookList = document.querySelector('.books');

for (let index = 0; index < library.length; index++) {
    const book = document.createElement('li');
    bookList.appendChild(book);
    book.textContent = `${index + 1} ${library[index]}`
}

const add = document.querySelector('.button-add');
const search = document.querySelector('.button-search');

add.onclick = function () {
    const addBookName = prompt('Введите название книги')
    if (addBookName == "") {
        alert('Название не может быть пустым!')
    }
    library.push(addBookName);
    const book = document.createElement('li');
    bookList.appendChild(book);
    book.textContent = library[library.length - 1];
}

let found = false

search.onclick = function () {
    const searchBookName = prompt('Введите название книги')
    if (searchBookName == "") {
        alert('Название не может быть пустым!')
    }
    for (let index = 0; index < library.length; index++) {
        if (searchBookName == library[index]) {
            document.querySelector(`li:nth-child(${index + 1})`).classList.add('foundItem');
            found = true;
            break;
        }
    }
    if (found == false) {
        alert('Книга не найдена!');
    }
}

