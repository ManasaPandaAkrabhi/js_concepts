// how to read argument from console
console.log(process.argv.slice(2)[0]);//it will extract a array to find our value 
//that we pass we have to slice the array
//formate to pass value is : node argument.js name=manas
//to print all values of array we can use forEach  loop:
process.argv.forEach((value,index)=>{
    console.log(`${index}:${value}`);
})