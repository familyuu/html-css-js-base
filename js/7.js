// 统计某一字符或字符串在另一个字符串中出现的次数

// function strCount(target, stringAnother) {
//   let count = 0;
//   while(stringAnother.match(target)) {
//     stringAnother = stringAnother.replace(target, '');
//     count++;
//   }
//   return count;
// }

function strCount(child, parent) {
    let childInNums = parent.split(child).length - 1;
    return childInNums;
}
console.log(strCount("_", "___abcds;nowenaaa"));