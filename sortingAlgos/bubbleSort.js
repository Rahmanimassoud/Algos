


const myNumbers = [9,8,5,3,1]
 const bubblesort = (arr)=>{
    for (let i = 0; i<arr.length-1; i++){
        for(let j = 0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]  //swaping in oneline without using the temp variable
            }
        }
    }
    console.log(arr);
 }

 bubblesort(myNumbers);