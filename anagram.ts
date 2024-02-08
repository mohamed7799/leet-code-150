function isAnagram(s: string, t: string): boolean {
    let results={}
    for (let index = 0; index < s.length; index++) {
        results[s[index]]=(results[s[index]]||0)+1
    }
    for (let index = 0; index < t.length; index++) {
        results[t[index]]=(results[s[index]]||0)-1
    }
    for (const key in results) {
        if(results[key]!==0) return false
    }
    return true;
};