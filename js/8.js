// 写一个加密字符串的方法

// The escape() function was deprecated in JavaScript version 1.5. Use encodeURI() or encodeURIComponent() instead.
// This function makes a string portable, so it can be transmitted across any network to any computer that supports ASCII characters.
// This function encodes special characters, with the exception of: * @ - _ + . /

// 利用 base64, 浏览器环境自带 btoa / atob 方法
// The btoa() method encodes a string in base-64. just for client javascript
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string.
// Tip: Use the atob() method to decode a base-64 encoded string.


// console.log(btoa(encodeURIComponent("hello world")));
// console.log(decodeURIComponent(atob("hello world")));

function encode(string, padding = 3) {
    return string.split('').map(s => String.fromCharCode(s.charCodeAt() + padding)).join('');
}

console.log(encode("hello world"));