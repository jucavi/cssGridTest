let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

const boxes = [one, two, three, six, nine, eight, seven, four];
const btnClick = document.getElementById('btn');

btnClick.addEventListener('click', (event) => {
    let prevBoxText = boxes[boxes.length - 1].innerText;

    boxes.forEach((box) => {
        let tmpText = box.innerText;
        box.innerText = prevBoxText;
        prevBoxText = tmpText;
    });
});