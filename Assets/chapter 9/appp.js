//Question 1

//Question 2

//Question 3


document.write("<h1>Question 3</h1>");
let arr_string = [
    'apple',
    'mango',
    'grapes',
    'melon'
]
console.log(`this is array wit strings ${arr_string}`);
document.write(`this is array with strings : ${arr_string}`);


// question 4

document.write("<br><h1>Question 4</h1>");
let arrNum = [1,2,3,4,5,6,7,8,9]
console.log(`this is array with numbers : ${arrNum}`);
document.write(`this is array with numbers : ${arrNum}`);



//Question 5
document.write("<br><h1>Question 4</h1>");
let arrBoolean = [true,false,true,false]
console.log(`this is array with boolean values : ${arrBoolean}`);
document.write(`this is array with boolean values : ${arrBoolean}`);

//Question 6

let mixedArray = ["ahsan" , 20, true , 'male']
console.log(`this is array with mixed values : ${mixedArray}`);
document.write(`this is array with mixed values : ${mixedArray}`);

//Question 7

let qualificatons = [
    'phD',
    'Bsc',
    'Msc',
    'intermediate',
    'matriculation'
]
document.write("<br> <h1>Qualifications</h1>")
for (let i = 0; i < qualificatons.length; i++) {
    console.log(`${i} ${qualificatons[i]}`);
    document.write(`<br> ${i} ${qualificatons[i]}`);

}

//Question 8


// document.write("<br> <h1> Students Marks And Percetage </h1>");
// let studentNames = []
// let score = []
// for (let i = 0; i <= 2; i++) {
// let userInputnames = prompt("Enter Students Names : ");
// studentNames.push(userInputnames);
// let userInputscore = prompt("Enter Students Scores : ");
// score.push(userInputscore);
// }
// let percentage = score/60*100;
// document.write(`<br> score of ${studentNames[0]} is ${score[0]} out of 60 and the percentage is ${Math.round(score[0]/60*100)} %`);
// document.write(`<br> score of ${studentNames[1]} is ${score[1]} out of 60 and the percentage is ${Math.round(score[1]/60*100)} %`);
// document.write(`<br> score of ${studentNames[2]} is ${score[2]} out of 60 and the percentage is ${Math.round(score[2]/60*100)} %`);
// console.log(`<br> score of ${studentNames[0]} is ${score[0]} out of 60 and the percentage is ${Math.round(score[0]/60*100)} %`);
// console.log(`<br> score of ${studentNames[1]} is ${score[1]} out of 60 and the percentage is ${Math.round(score[1]/60*100)} %`);
// console.log(`<br> score of ${studentNames[2]} is ${score[2]} out of 60 and the percentage is ${Math.round(score[2]/60*100)} %`);


//Question 9
// document.write(`<br> <h1>Question 9</h1>`)
// let colors = ['red' ,'green'  ,'blue' , 'black']

// console.log(colors);
// document.write(`<br> [ ${colors} ]`);
// document.write('<br>' , colors.length);

// let newColor = prompt("enter color you want at the begining : ");
// let endColor = prompt("enter color you want at the end : ")

// colors.unshift(newColor);
// colors.push(endColor);
// console.log(colors);
// document.write("<br> <h2> this is Updated :</h2> <br>")
// document.write(`[ ${colors} ]`);
// document.write('<br>' , colors.length);
// for (let i = 0; i <= 1; i++) {
//     let moreColor = prompt('enter two more color : ');
//     document.write(moreColor[i]);  
// }
// colors.unshift(moreColor);
// document.write("<br> <h2> this is another Updated array :</h2> <br>")
// document.write(`[ ${moreColor} ]`);



//Question 10

let scoreOfStudents = []
for (let i = 0; i <= 5; i++) {
   let score_Input = prompt("Enter Score : ");
  scoreOfStudents.push(score_Input); 
}
document.write(`<br> <h1>Score without Ascending Order : </h1> ${scoreOfStudents}`) 
scoreOfStudents.sort((a, b) => a - b);
console.log(scoreOfStudents);
document.write(`<br> <h1>Score in Ascending Order : </h1> ${scoreOfStudents}`);


































