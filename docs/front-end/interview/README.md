# 面试

## JS

### 闭包

#### 函数节流和防抖

```javascript
/**
 * 基础班防抖函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @returns {(function(): void)|*}
 */
function debounce(func, wait) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}

/**
 * 可以立即执行的防抖函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @param immediate 是否立即执行
 * @returns {(function(): void)|*}
 */
function debounceImmediate(func, wait, immediate) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);

      if (callNow) func.apply(this, arguments)
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments)
      }, wait);
    }
  }
}

/**
 * 基础版不使用定时器的节流函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @returns {(function(): void)|*}
 */
function throttle(func, wait) {
  let previous = 0;
  return function () {
    let now = Date.now()
    if (now - previous >= wait) {
      func.apply(this, arguments)
      previous = now;
    }
  }
}

/**
 * 基础版使用定时器的节流函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @returns {(function(): void)|*}
 */
function throttleTimeout(func, wait) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        timer = null;
      }, wait)
    }
  }
}
```

## 网络

