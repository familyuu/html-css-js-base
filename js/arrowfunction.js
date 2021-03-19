// globalThis.addr = {
//     base: 1,
//     add: function(a) {
//         let f = v => v + this.base;
//         return f(a);
//     }
// };

// console.log(addr.add.call({base: 2}, 2));


Function.prototype.myBind = function (context) {
    // console.log(Object.prototype.toString.call(this));
    if (typeof this !== 'function') {
        new TypeError('Error')
    }
    let _this = this;
    let args = [...arguments].slice(1);

    return function F() {
        console.log(Object.prototype.toString.call(_this));
        if (this instanceof F) {
            return new _this(...args, ...arguments);
        }
        return _this.apply(context, args.concat(...arguments));
    }
}

let test = function(n) {
    // console.log(Object.prototype.toString.call(this));
    console.log(this.base + n)
}
// console.log(Object.prototype.toString.call(test));

let newTest = test.myBind({base: 2}, 6);

test(3);
newTest();