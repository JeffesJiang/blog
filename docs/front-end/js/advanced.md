# JS进阶

## 原型和原型链

背景：2021-07-14 早班地铁 阅读 [循序渐进带你全方位剖析原型链](https://juejin.cn/post/6984322390322839559) 中描述的不是很好理解和全面，我打算全方位的队原型和原型链进行一次深入剖析。

參考：[链接](https://juejin.cn/post/6844903989088092174)

js之父在设计js原型、原型链的时候遵从以下两个准则:

```javascript
function Person() {

}

const person = new Person()

// 准则1：原型对象（即Person.prototype）的constructor指向构造函数本身
Person.prototype.constructor === Person
// 准则2：实例（即person）的__proto__和原型对象指向同一个地方
person.__proto__ === Person.prototype
```
