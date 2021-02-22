// 写一个去除制表符和换行符的方法
/**
 * \f  匹配换页字符。
 * \n  匹配换行字符。
 * \r  匹配回车符字符。
 * \t  匹配制表字符。
 * \v  匹配垂直制表符。
 * @param str
 * @returns {void | string}
 */
function del(string) {
    return string.replace(/[\t\n\f\t\v]/g, '')
}

console.log(del("\t\tgg\n\nff"));