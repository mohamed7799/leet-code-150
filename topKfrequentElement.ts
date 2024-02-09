let topKFrequent=(nums: number[], k: number): number[]=> {

    let hashMap=new Map<number,number>();
    nums.forEach(element => {
        let oldVal: number | undefined = hashMap.get(element);
        if (oldVal !== undefined) hashMap.set(element, oldVal+1);
        else hashMap.set(element, 1);
    });

   

    return Array.from(hashMap.entries()).sort((a,b)=>b[1]-a[1]).map(entry=>entry[0]).slice(0,k)

};

const map = new Map();
map.set(1, "onhfghfghge");   // Could also include these when calling
map.set(2, "two");   // the constructor but I wanted to
map.set(3, "three"); // avoid any confusion

for (const [key, value] of map) { // Using the default iterator (could be `map.entries()` instead)
    console.log(`The value for key ${key} is ${value}`);
}