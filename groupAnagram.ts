let groupAnagrams = (strs: string[]): string[][] => {
  let hashMap = new Map<string, string[]>();
  for (let index = 0; index < strs.length; index++) {
    let sortedString = strs[index].split("").sort().join("");
    let oldVal = hashMap.get(sortedString);
    if (oldVal) hashMap.set(sortedString, [...oldVal, strs[index]]);
    else hashMap.set(sortedString, [strs[index]]);
  }
  return Array.from(hashMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
