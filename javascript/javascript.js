// array: let arrayName=["item1","item2","item1","item2"]

// let email="laptop@gmail.com"
// let firstName="kanyana";
// let num1=4;
// let numm2="4"
// console.log("laptop@gmail.com")
// console.log("my array"+ students[3]);
// if(email==="laptop@gmail.com"|| firstName==="kanyana");
/*let students=["ndizihiwe","kanyana","nyirandengimana","munezero","ishimwe"];
let studentsAge=[1,2,3,4,5,6];
let a=1;
let b=0;
let sum = studentsAge[a] + studentsAge[b];
if(a < studentsAge.length && b < studentsAge.length){
   console.log("sum is:" + sum);
   console.log("student is:",students[sum]);
}
else{
    console.log(`student does not exist at index ${sum}`);
}
*/
// if(sum < students.length)
// {
//  console.log("student is:",students[sum]);
// }
// else{
//     console.log(`student does not exist at index ${sum}`);
// }
// let numbers = prompt("give the number in range");
// let number= 1;
// let numbers2=["one","two","three","four","five","six","seven","eight","nine","ten"];
// if()
/*
1.arrow function
let functionName= () =>{
 calling function:
 functionName();
 2.function parameter
  let functionName= (paramenter1,paramenter2,paramenter3,.......,paramentern)
}
terminate a function
*/
/*
errors
1.syntax error
2.runtime error
3.logic error
*/
//unit testing
//higher order functions: filter,map
//console.log(checkResult("8"))
//call back function



// let output = (name) =>{
//     if(name === "kanyana"){
//       return console.log("tru kanyana");
//     }
//     console.log("hi");
//     console.log("function is called");
// }
// output("kanyana");
// let output = (age) =>{
    
//  if(age > 0){
//     if(age > 18){
//         console.log("the person is over 18");
//       }
//     else{
//         console.log("the person is under 18");
//       }
//     }
//       else{
//         console.log("the age does not exist");
//       }      
//  }
//  output(9);
// let my = (number) =>{
//    return  number;
// }
// console.log(my(5));

// let word = (number) => {
//     let arr=["one","two","three","four","five"];
//     if (number > arr.length){
//         console.log("this number is not in range");
//     }
//         return arr [number];
// }
// console.log(word(5));
// let students=[1,2,3,4,5,6,5,3];
// let studentNames=["ndizihiwe","kanyana","nyirandengimana","munezero","ishimwe"];
// let filteredArray = students.filter((item) => item === 3);
// let filteredStudents = studentNames.filter((item) => item === "gisa");
// console.log("array of names:", filteredStudents);
// console.log("length of filterd students is:", filteredStudents.length)
// if(studentNames.length != 0 ){
//   console.log("item is found");
// }
// else{
//   console.log("item is not found");
// }
// // for(let i = 0; i < 3; i++){
// //  console.log("am in");
// //   console.log("value of i",i);
// // }
// let displayArray = (number) =>{
//   return number;
//  }
// console.log(displayArray(students));
// console.log("hi there ...............");
let objectArray = [{"firstName": "axcel", "age":20},{"firstName": "edith", "age":17},{"firstName": "kanyana", "age":18},{"firstName": "grace", "age":16}]
let filteredStudent = objectArray.filter((item) => item.age === 17);
console.log("the student:",filteredStudent);
