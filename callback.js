//callback function : a call back function is a function which is passed as an argument to another 
//function which is execute later
/*console.log("task started");
function asyncTask(cb){
    console.log("task running");
    cb();it will through an error as callback is synchronous 
    so to make it asynchronous we have to use setTimeout(),promises()... methods 
    
    setTimeout(cb,0);

}
asyncTask(()=> console.log(name));
console.log("task end");
const name="manas";*/
//handling errors on callback
function asyncTask(cb){
    setTimeout(()=>{
        cb(null,"this is data from server");//first argument refers to error if it is null then no error else their is a error
    },0);
}
asyncTask((err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("data:",data);
    }
});
