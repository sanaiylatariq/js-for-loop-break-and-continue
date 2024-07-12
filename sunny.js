// // for loop and break continue
// // for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// let value = 50
// for (let value = 0; value <= 10; value++) {
//     const element = value;
//     if (value==5) {
//         console.log("value equal 5");
//     }
//     console.log(element);
// }
// // console.log(element);

// for (let i = 0; i < 10; i++) {
//     // console.log(i);
// console.log(`outer loop value ${i}`); 
// for (let j = 0; j < 10; j++) {
//     // console.log(j);
// // console.log(`inner  loop value ${j} and outer loop value ${i} `);  
// console.log(i +`* `+ j +`=`+ i*j);  
// }   
// }

// for (let a = 1; a < 10; a++) {
// console.log(`outer loop`); 
// for (let b = 0; b <10; b++) {
// console.log(a + `*`+ b + `=` + a*b);    
// }  
// }
// for (let c = 0; c < 10; c++) {
// console.log(`outer loop`);  
//   for (let d = 0; d < 10; d++) {
// console.log(c +`+`+ d +`=`+ c+(d/d*c)) ;    
// }
// }
// for (let e = 1; e <= 10; e++) {
// console.log(`table of ${e}`);    
// for (let f = 1; f <= 10; f++) {
// console.log(e + `*`+ f + `=` + e*f );    
// }
// }
// let myarray = ["sanaiyla", "kato", "sunny"]
// console.log( myarray.length)
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//     break
//     }
// console.log(`value is ${index}`);    
// }
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`detected 5`);
continue    }
console.log(`value is ${index}`);    
}