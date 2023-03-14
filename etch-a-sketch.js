function createGrid(rows, columns) {
    let row;
    for (let r = 0; r < rows; ++r) {
        row = document.createElement('div');
        row.style.cssText = 'display: flex;';
        for (let c = 0; c < columns; ++c) {
            let div = document.createElement('div');
            div.style.width = '40px';
            div.style.height = '40px';
            //const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = null;
            div.style.border = '2px black solid';
            row.append(div);
            container.append(row);
        }
    }
}

createGrid(16,16);