const newEntity=(obj)=>console.log();
const numbers=[2,4,6,8,10,20,37,33,55,77,7];
function filterEven(numbers){
    return numbers.filter(num=>num%2==0);
}
const r1=filterEven(numbers);
console.log(r1);
function factorial(num){
    if(num===0|| num===1){
        return 1;
    }
    else{
        return num* factorial(num-1);
    }
}
console.log(factorial(5));
