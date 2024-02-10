function productExceptSelf(nums: number[]): number[] {
    
    let results:number[]=[];

    let prefixProduct:number[]=[];
    prefixProduct[0]=nums[0];

    let postfixProduct:number[]=Array(nums.length);
    postfixProduct[nums.length-1]=nums[nums.length-1];

    for (let index = 1; index < nums.length; index++) {
        prefixProduct[index]=prefixProduct[index-1]*nums[index]
    }

   
   for (let index = nums.length-2; index >-1; index--) {
        postfixProduct[index]=postfixProduct[index+1]*nums[index]
    } 
    console.log(prefixProduct)
    console.log(postfixProduct)
    for (let index = 0; index < nums.length; index++) {
        if(index===0) results.push(postfixProduct[1])
        else if (index===nums.length-1) results.push(prefixProduct[index-1])
        else results.push(postfixProduct[index+1]*prefixProduct[index-1])
    } 
    

    return results
};


console.log(productExceptSelf([1,2,3,4]))