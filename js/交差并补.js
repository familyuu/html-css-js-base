// 分别写出数组的交集、并集、差集、补集这四个方法

// Intersection
const intersection = (a, b) => {
    return a.filter(elem => b.includes(elem));
};

const intersection2 = (a, b) => {
    let setA = new Set(a);
    let setB = new Set(b);
    return [...setA].filter(elem => setB.has(elem));
}

// Difference
const difference = (a, b) => {
    return a.filter(elem => !b.includes(elem));
};

//Union
const union = (a, b) => {
    let a_diff_b = difference(a, b);
    return a_diff_b.concat(b);
};
const union2 = (a, b) => {
    let setA = new Set(a);
    let setB = new Set(b); 
    let union_a_b = new Set([...a, ...b]);
    return [...union_a_b];    
} 

// Complete
const complete = (a, b) => {
    // return difference(a, b).concat(difference(b, a));
    return a.filter(e => !b.includes(e)).concat(b.filter(e => !a.includes(e)));
};

const a = [1, 2, 3, 4, 5];
const b = [2, 3, 4, "hello"];

console.log(complete(a, b));