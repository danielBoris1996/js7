const height = [
    164,
    157,
    160,
    143,
    170,
]

const heightList = document.querySelector('.heightList');

for (let index = 0; index < height.length; index++) {
    const heightEl = document.createElement('li');
    heightList.appendChild(heightEl);
    heightEl.textContent = `${index + 1}) ${height[index]}`;
}

const add = document.querySelector('.button-add');
const filter = document.querySelector('.button-filter');

add.onclick = function () {
    const addHeight = Number(prompt('Введите рост'))
    if (isNaN(addHeight)) {
        alert('Некорректное зачение')
    }
    else if (addHeight == "") {
        alert('Рост не введён')
    }
    else {
        height.push(addHeight);
        const heightEl = document.createElement('li');
        heightList.appendChild(heightEl);
        heightEl.textContent = `${height.length}) ${height[height.length - 1]}`;
    }
}

filter.onclick = function () {
    const minHeight = Number(prompt('Введите минимальный рост'))
    if (isNaN(minHeight)) {
        alert('Некорректное зачение')
    }
    else if (minHeight == "") {
        alert('Рост не введён')
    }
    else {
        heightList.innerHTML = '';
        const filteredHeight = [];
        for (let index = 0; index < height.length; index++) {
            if (height[index] >= minHeight) {
                filteredHeight.push(height[index]);
            }
        }
        for (let index = 0; index < filteredHeight.length; index++) {
            const filteredHeightEl = document.createElement('li');
            heightList.appendChild(filteredHeightEl);
            filteredHeightEl.textContent = `${index + 1}) ${filteredHeight[index]}`;
        }
    }

}

