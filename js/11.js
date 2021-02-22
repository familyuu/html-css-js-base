// 简要描述下JS有哪些内置的对象 

// 这些全局属性返回一个简单值，这些值没有自己的属性和方法。
// Infinity
// NaN
// undefined
// globalThis



// 值属性
Infinity
NaN
undefined
globalThis
// 在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，
// 可以通过 window、self 或者 frames 取到全局对象，但是在 Web Workers 中，
// 只有 self 可以。在 Node.js 中，它们都无法获取，必须使用 global。

// 在松散模式下，可以在函数中返回 this 来获取全局对象，但是在严格模式和模块环境下，
// this 会返回 undefined。 You can also use Function('return this')(), but environments that disable eval(), 
// like CSP in browsers, prevent use of Function in this way.

// globalThis 提供了一个标准的方式来获取不同环境下的全局 this  对象（也就是全局对象自身）。
// 不像 window 或者 self 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，
// 不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 this 就是 globalThis。



// 函数属性
// 全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。
eval()
uneval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()



// 基本对象
Object
Function
Boolean
Symbol
Error
TypeError
InternalError
RangeError
ReferenceError
SyntaxError
URIError

// 数字日期
Date
Number


Math
Intl
WebAssembly

// 控制抽象对象
Promise
Generator
GeneratorFunction
AsyncFunction

arguments




String
Number
Boolean
Array
ArrayBuffer
Blob
