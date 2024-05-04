// //Question 1
let multiDimensional_array = [[[ ]]];
console.log(multiDimensional_array);


// //Question 2
let multiDimensional_array2 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(multiDimensional_array2);

// //Question 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Question 4

let number = +prompt("Enter the number for which you want to print the multiplication table:");
let length = +prompt("Enter the length of the multiplication table:");
for (let i = 1; i <= length; i++) {
 console.log(number , "*" , i , '=' , number*i);
document.write( number , " * " , i , ' = ' , number * i , " <br> ");
}

//Question 5

let fruits = ['apple', 'banana', 'strawberry' , 'melon'];
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
    
}

//Question 6

let countStart = +prompt("enter starting : ");
let countEnd = +prompt("enter ending : ");
document.write(`<br> Counting numbers : `)
for (let i = countStart; i <= countEnd; i++) {
    console.log(i);
    document.write(`${i} \t`);
}
let reverseSart  = +prompt("enter reverse starting : ");
let reverseEnd  = +prompt("enter reverse ending : ");
document.write(`<br> reverse numbers : `)
for (let i = reverseSart; i >= reverseEnd; i--) {
    console.log(i);
    document.write(`\n ${i} \t`);
}
let evenStart = +prompt("enter even starting : ");
let evenEnd = +prompt("enter even ending : ");
document.write(`<br> even numbers : `)

for (let i = evenStart; i <= evenEnd; i++) {
 if (i%2===0) {
    console.log(i)
    document.write(`${ i } \t`)
 }
}
let oddStart = +prompt("enter odd starting : ");
let oddEnd = +prompt("enter odd ending : ");
document.write(`<br> odd numbers : `)
for (let i = oddStart; i <= oddEnd; i++) {
 if (i%2!==0) {
    console.log(i)
    document.write(`${ i } \t`)
 }
}

//Question 7

let item = ['cookie' , 'cake' , 'chhips' , 'patties']
let userSearch = prompt("Enter Item You Want : ");
if (item.includes(userSearch)) {
    console.log(`Available`)
} else {
    console.log(`${userSearch} Not Available`)
    
}

//Question 8
let num = [234,3413,123,12,34,54,23,55,288]
let largest = num[0];
console.log(largest)
for (let i = 1; i < num.length; i++) {
    if (num[i] > i) {
        largest = num[1]
    } 
    console.log(`largest number is ${largest}`);
    
}


//question 9 


let m5 = 5;
for (let i = 1; i <= 20; i++) {
    console.log(`${m5 * i}`);    
}