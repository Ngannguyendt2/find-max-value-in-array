function find() {
    let array=[2,4,2,7,3,8];
    let value;
    let max=array[0];
    for(let i=0;i<(array.length)-1;i++){

        if(array[i]>max)
        {
            max=array[i];

        }
    }
    alert('Value max in array is '+max);
}