function createGrid(rows, columns) {
    for (let r = 0; r < rows; ++r) {
        let row = document.createElement('div');
        row.style.cssText = 'display: flex;';
        row.style.flexGrow = 1;
        for (let c = 0; c < columns; ++c) {
            let div = document.createElement('div');
            div.style.width = '40px';
            div.style.border = '2px black solid';
            div.style.flexGrow = 1;
            div.addEventListener('mouseover', function() {
                if (div.style.backgroundColor == '') {
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    div.style.backgroundColor = '#' + randomColor;
                }
            });
            row.append(div);
        }
        let container = document.body.querySelector('.container');
        container.append(row);
    }
}

createGrid(16,16);
button.addEventListener('click', function() {
    let container = document.querySelector('.container');
    container.remove();
    let cont = document.createElement('div');
    cont.classList.add('container');
    body.append(cont);
    let rows = prompt('enter number of rows:', 16);
    while (+rows > 100) rows = prompt('enter number of rows:', 16);
    let columns = prompt('enter number of columns:', 16);
    while (+columns > 100) columns = prompt('enter number of columns:', 16);
    createGrid(rows, columns);
})