
//********* 1 способ (аттрибут HTML onclick) ********//

const showMessage = () => {
    alert('Hello');
}

//****** 2 способ (свойство DOM объекта) *******//

const btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    alert('Кликнули по первой кнопке');
}

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
    alert('Кликнули по второй кнопке');
}

const btn3 = document.querySelector('#btn3');
btn3.onclick = () => {
    alert('Кликнули по третьей кнопке');
}

//*********** 3 способ (метод AddEventListener) ***********//

btn1.addEventListener('click', ()=>{
    alert('AddEventListener1');
})

btn1.addEventListener('click', ()=>{
    alert('AddEventListener2');
})


let n = 0;
btnIncr.addEventListener('click', ()=>{
        n++;
})

btnDecr.addEventListener('click', ()=>{
        n--;
})

result.addEventListener('click', ()=>{
    alert(n);
})