// 写一个数组去重的方法
// 降维 + 去重

const newArr = [];

// function flattern(arr){
//     arr.forEach(item => {
//         if(Array.isArray(item)) {
//             flattern(item);
//         } else {
//             newArr.push(item);
//         }
//     });
// }
function flattern2(arr){
    
}

function uniqueArr(arr){
  const set =  new Set(arr);
  return [...set];
}
flattern([1, [3, 2], 4, [1, 2, [3, [4]]]]);
console.log(uniqueArr(newArr));