let name1 = '';
let name2 = '';
// Players Names Input
document.querySelector('.name1').addEventListener('keyup', function () {
    name1 = document.querySelector('.name1').value;
    name1 = name1.replace(/\s/g, "");
    localStorage.setItem('name1', name1);
});
document.querySelector('.name2').addEventListener('keyup', function () {
    name2 = document.querySelector('.name2').value;
    name2 = name2.replace(/\s/g, "");
    localStorage.setItem('name2', name2);
});

// Start Button
document.querySelector('.btn-start').addEventListener('click', function () {
    if (name1 === '' && name2 !== '') {
        localStorage.setItem('name1', 'player 1');
        document.location.href = "./index.html";
    } else if (name1 !== '' && name2 === '') {
        localStorage.setItem('name2', 'player 2');
        document.location.href = "./index.html";
    } else {
        localStorage.setItem('name1', 'player 1');
        localStorage.setItem('name2', 'player 2');
        document.location.href = "./index.html";
    }
});
