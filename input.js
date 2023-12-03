//how to read anything from console
//for this we need another package i.e readline
/*const readLine= require("readline");

const rl= readLine.createInterface({
    input:process.stdin,//used for standard input
    output:process.stdout,
});
      rl.question(`what is your name ?`,(name)=>{
      console.log(`hi ${name}`);
      rl.close();
  });*/

//we can also use prompt instead of question..
const prompt=require("prompt-sync")();
display=()=>{
const name= prompt("Enter your name:?");
console.log(`hii ${name}`);
process.exit(0);
}
display();
 
