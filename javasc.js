// array sorting selection sort
function se_sort(ar){
    for(i=0;i<ar.length-1;i++)
    {
        min_idx=i
        for(j=i+1;j<ar.length;j++)
        {
            if(ar[j]<ar[min_idx]){
                min_idx=j;
            }
        }
        temp=ar[min_idx];
        ar[min_idx]=ar[i];
        ar[i]=temp;
    }
}
const ar=[2,43,1,4,9,3];
const res=se_sort(ar);
console.log(res);