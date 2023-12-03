//create a path module
const path=require("path");

const filepath="D:\git_Hub\Node_JS_Akrabhi\files\sample.txt";

// //directory name
// console.log(path.dirname(filepath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filepath));
// console.log(__filename);
// //extension
// console.log(path.extname(filepath));


const fs= require("fs");//fs:fileSystem all methods of files is kept here
const { has, bindKey } = require("lodash");
const nodemon = require("nodemon");
//console.log(fs);

//reading from a file-- Asynch

// fs.readFile(filepath, (err, data)=>{
//  if(err)
//   {
//     throw new Error("this is an error");
//   }

//     console.log(data);
// });

try{
    const data= fs.readFileSync(path.join(__dirname,"files","sample.txt"));
    console.log(data.toString());//it return buffer type so we have to type cast it into (tostring())
}
catch(err){
    console.log(err);
}
//we can also read by using filepromise

// const fspromise= require("fs").promises;
// const filereading=async()=>{
// try{
//     const data=await fspromise.readFile(filepath,{encoding:"utf-8"})
//     console.log(data);
// }
// catch(err)
// {
//     console.log(err);
// }
// }
// filereading();

//writing into file and reading content
 const txtfile= path.join(__dirname,"files","text.txt")
const content="I love it";
// //writing
// fs.writeFileSync(txtfile,content,(err)=>{
//     if(err) throw new Error("something went wrong");

//     console.log("write operation complete");
//     //reading
//     fs.readFileSync(txtfile,"utf-8",(err,data)=>{
//         if(err) throw new Error(err);
//         console.log(data);
//     });
// });
