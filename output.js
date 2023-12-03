//how to give output to console
//one way is console.log();

// we can also print value in console using %s,%d,%i,%o

/*console.log("my name is %s my age is %d",'mmanas',23);//using format specifier
//%s format variable to string
//%d for integer
console.count("manas");//we can also count number of time one things is printed on console
console.count("manas");
//console.count("%s panda",'manas');//we can not use format specifier with count it will not support that
console.log("%s panda",'manas');*/


/* how to calculate total time taken by a function
const sum=()=> console.log(`Sum of 2 and 3 is ${2+3}`);
 function mul(){
    console.log(`multiplection of 2 and 3 is ${2*3}`);
 }
const measureTime=()=>{
    console.time("sum()");
    sum();
    console.timeEnd("sum()");
    console.time("mul()");
    mul();
    console.timeEnd("mul()");
};
measureTime();*/

/*how to use progress bar in output : for that we need to instal a package i.e: npm -i progress*/
const progressBar= require("progress");

const bar=new progressBar("downloading [:bar]:rate/bps :percent :etas",{total:20})

const timer= setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100);

//how to add a colorful text in console : for that we need to install chalk package:
//to install it wrote command npm i chalk@4 (NPM: Node package manager)
const chalk= require("chalk");
console.log(chalk.red("This is green"));
console.log(chalk.cyan("this is cyan"));
