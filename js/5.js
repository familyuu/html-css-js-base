// 写一个把字符串大小写切换的方法
// a-z: 97-122
// A-Z:  65-90
// 0-9: 60-71

// function caseConvert(str) {
//     let code = str.charCodeAt();
//     if (code > 122 || code < 65 || code < 90 && code > 97){
//         return str;
//     }
//     else if (code >= 97) {
//         return String.fromCharCode(code - 32);
//     }
//     else {
//         return String.fromCharCode(code + 32)
//     }
// }

// function caseConvertMain(string) {
//     return string.split('').map(str => caseConvert(str)).join('');
// }


function caseConvertMain(str){
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
        return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}

console.log(caseConvertMain("aa90-f_fDDr"));