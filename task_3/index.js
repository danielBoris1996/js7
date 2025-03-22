const goods = [
    'Макароны',
    'Яблоки',
    'Сахар',
    'Арбуз',
    'Кофе',
    'Книга',
    'Молоко'
]

function sort(arr) {
    for (let index = 0; index < goods.length; index++) {
        for (let j = 0; j < goods.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp 
            }
        }
    }
}

const add = document.querySelector('.button-add');

const goodsList = document.querySelector('.goodsList');

function renderList() {
    goodsList.innerHTML = "";
    for (let index = 0; index < goods.length; index++) {
        const goodsEl = document.createElement('li');
        goodsList.appendChild(goodsEl);
        goodsEl.textContent = `${index + 1}) ${goods[index]}`;
    }
}

sort(goods)

renderList()

add.onclick = function () {
    const addGoods = prompt('Введите название товара')
    if (addGoods == "") {
        alert('Название товара не введено!')
    }
    else {
        goods.push(addGoods);       
        sort(goods)
    }
    renderList()
}

