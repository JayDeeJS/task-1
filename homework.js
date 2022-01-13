
const removed = (data, ...deleted) => {
    toFilter = [...data];
    for(let i = 0; i < deleted.length; i ++){
        toFilter = toFilter.filter((value) => value !== deleted[i]);
    }
    return toFilter;
}
let final = removed([1,2,3,2,1,2], 1,2);
console.log(final);


let n = 0;
let m = prompt('Введите число');
while(m != 99){
    n++;
    m = prompt('Введите число');
}
console.log('количество чисел = ' + n);


/*let x = 0;
let y = prompt('Введите число');
for(let i = 0; i < y; i++){
    if(y != 99){
        x++;
        y = prompt('Введите число');
    } else{
        console.log('количество чисел = ' + x);
    }
}*/


const array = [];
const object = {a: 1, b: 2};
const transform = (object) => {
  for (let key in object) {
      array.push([key, object[key]]);
  }
  return array;
}
console.log(transform(object));

const makePairs = (object) => {
    let arr = [];
    for(let property in object){
        arr.push([property,object[property]])
    }
    return arr;
}
const data = { a: 1, b: 2 };
const result = makePairs(data);
console.log(result);