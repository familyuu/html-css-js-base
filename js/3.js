// 去除字符串中最后一个指定的字符

// function delTarget(str, target) {
//     let index = str.lastIndexOf(del);
//     return str.substring(0, index) + str.substring(index + 1, str.length);
// }

// function delLast(str,target) {
//     // let reg =new RegExp(`${target}(?=([^${target}]*)$)`) //正向肯定预查 (?=pattern)
//     // let reg =new RegExp(`${target}(?!([^${target}]{3})$)`) //找到指定字符，它与它后边的指定字符之间不超过三个其他字符。正向否定预查 (?!pattern)
//     // let reg =new RegExp(`(?<=^([^${target}]*))${target}`) //找到第1个指定的字符，反向肯定预查 (?<=pattern)
//     let reg = new RegExp("(?<!(h+))h") //找到第二个开始，往后的所有指定的字符，反向否定预查 (?<!pattern)
    
//     console.log(str.match(reg));
//     return str.replace(reg, '')
//   }

// const myString = "123,4h56,h89,054h321*"

// console.log(delLast(myString, '7'));

const arrow = require('./arrowfunction.js');
console.log(arrow.age);