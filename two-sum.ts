function twoSum(nums: number[], target: number): number[] {
    let results:number[]=[];
    let hashMap=new Map<number, number>();;
    for (let index = 0; index < nums.length; index++) {
        let missingNum=target-nums[index]
        if(hashMap[missingNum]!==undefined)return [hashMap[missingNum],index]
        hashMap[nums[index]]=index
        
    }
      return results
};