console.log("hello to node js");
console.log("hye");

//lodash is used to manupalate arrays 
const _= require("lodash");
const ar=[2,3,4,56];
console.log(_.concat(ar));

//to output like a cow and the was say the text
//  const cowsay= require("cowsay");
//  console.log(cowsay.say({
//      text:"i am learning NPM module",
//      e:"00",
//      t:"U"
//  }));
 
//to use colors ..
 const colors= require("colors");

 colors.disable();// it will disable colors dependency 
 
 console.log("hello".blue);
 console.log("rainbow".rainbow);//it will print in rainbow colors

 colors.enable();
 console.log("it is green".green);
 console.log("inverse the color".inverse);
 console.log("underline a text with red color".underline.red);
 console.log("run the trap".trap);

 //another way of export package 
// const frod= require("./new");
// console.log(frod);

//or

//const {frod, tesla}= require("./new");
//console.log(frod,tesla);

//how to print it like a object

//console.log(JSON.stringify(tesla,null,2));
//console.log(JSON.stringify(frod,undefined,3));//JSON.stringfy is used to print as a object..