console.log("Start operation");
/*function sleep(miliseconds){
    let starttime= new Date().getTime();
    console.log("operationn running");
    while(new Date().getTime()<starttime+miliseconds){
        console.log("is in progress");
    }
    console.log("operation is done");
}
sleep(10);
console.log("do something else..");
this above program is a synchronous program that means execution is hult till it complete */

//so to execute parallely we need a async function 
function sleep(miliseconds){
    console.log("operationn running");
    setTimeout(()=>{
        console.log("operation is done");
    },miliseconds);
}
sleep(1000);
console.log("do something else..");