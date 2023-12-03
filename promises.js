// // const promise = new Promise((resolve,reject)=>{
// //     if(true){
// //         const person={name:"manas"};
// //         resolve(person);
// //     }
// //     else{
// //         const err={errorcode:"1001"};
// //         reject(err);
// //     }
// // });
// // // promise.then(
// // //     (val)=>{
// // //         console.log(val);//if resolve
// // //     },
// // //     (val)=>{
// // //         console.log(val);//if reject
// // //     });

const { reject } = require("lodash")

// // //or we can also handel it by using catch()
// // promise.then(
// //     (val)=>{
// //         console.log(val);//if resolve
// //     }
// //     ).catch((err) => {console.log("failed!")});//if reject
// //promises are asynchronous in nature 
// function asyncTask(){
//     return Promise.resolve();
// }
// asyncTask().then(()=>{
//     console.log(name);
// })
// const name="manas";

// //channing in promises
// const p=Promise.resolve("done");
// p.then((val)=>{
//     console.log(val);
//     return "done1";
// }).then((val)=>{
//     console.log(val);
//     return "done2";
// }).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// });
const makeApicall=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("this AIP executed in:"+time);
        },time);
    });
};
//promises.all():used to executed all promises
 let multiApicall=[makeApicall(1000),makeApicall(2000),makeApicall(500)];
 Promise.all(multiApicall).then((val)=>{
     console.log(val);//it will return an array
 })
//promises.race is used to find which promises are resolve or reject first
Promise.race(multiApicall).then((val)=>{
    console.log(val);
})