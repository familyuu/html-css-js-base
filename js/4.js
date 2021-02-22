// 写一个方法把下划线命名转成大驼峰命名
// function toCamel(str) {
//     str = str.replace(/(\w)/, (match, $1) => `${$1.toUpperCase()}`)
//     while(str.match(/\w_\w/)) {
//       str = str.replace(/(\w)(_)(\w)/, (match, $1, $2, $3) => `${$1}${$3.toUpperCase()}`)
//     }
//     return str
//   }
  
// function toCamel(str) {
//     return str.split('_').reduce((a, b) => {
//         return a + b.substr(0,1).toUpperCase() + b.substr(1);
//     })
// }

function toCamel(str) {
    return str.replace(/(^|_)(\w)/g, (match, $1, $2) => `${$2.toUpperCase()}`)
}
console.log(toCamel('ac_def'))