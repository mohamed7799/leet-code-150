function twoSum(nums: number[], target: number): number[] {
    let results:number[]=[];
    let hashMap=new Map<number, number>();;
    for (let index = 0; index < nums.length; index++) {
        let missingNum=target-nums[index]
        if(hashMap.get(missingNum)!==undefined)return [hashMap.get(missingNum)!,index]
        hashMap.set(nums[index],index)
        
    }
      return results
};