function createGrid(rows, columns) {
    for (let r = 0; r < rows; ++r) {
        let row = document.createElement('div');
        row.style.cssText = 'display: flex;';
        for (let c = 0; c < columns; ++c) {
            let div = document.createElement('div');
            div.style.width = '40px';
            div.style.height = '40px';
            div.style.border = '2px black solid';
            div.addEventListener('mouseover', function() {
                if (div.style.backgroundColor == '') {
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    div.style.backgroundColor = '#' + randomColor;
                }
            });
            row.append(div);
            container.append(row);
        }
    }
}

createGrid(16,16);