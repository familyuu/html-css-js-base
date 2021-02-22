// 写一个判断数据类型的方法
// Every object has a toString() method that is automatically 
// called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. 
// By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, 
// toString() returns "[object type]", where type is the object type. The following code illustrates this:

// const o = new Object();
// o.toString(); // returns [object Object]


// typeof
// 不能判读 数组 和 对象

function typeCheck(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
}

console.log(Object.prototype.toString.call(typeCheck));