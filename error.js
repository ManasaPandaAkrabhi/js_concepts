//how to handel Errors
const error=new Error("something went wrong");
const { reject } = require("lodash");
//console.log(error.message);
//throw new Error("i am error object");
const {customeError}=require("./customeError");
//throw new customeError("this is a custom error object");

//handeling exception using try and catch
// try{
//     dosomething();
// }catch(e){
//     console.log("Error occur");
//     console.log(e);
// }
function dosomething(){
   // console.log("i am from dosomething function");
    const er=new Error("it is an error object");
    throw er;
    // const data="i am from do something";
    // return data;
 }

//uncaught exception

// process.on("uncaughtException",(err)=>{
//     console.log("there was an uncaught exception");
//     process.exit(1);
// });


//Exception with promise
/*const promi=new Promise((resolve, reject)=>{
    if(true){
        resolve(dosomething());
    }
    else{
        reject(dosomething());
    }
});

promi.then((val)=>{
    console.log(val);
}).catch((msg)=>{
    console.log(msg);
});
*/

//exception with Async Await

const something=async()=>{
    try{
        await dosomething();
    }
    catch(err){
        console.log(err);
    }
}
something();
