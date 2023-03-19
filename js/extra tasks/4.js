function add(a, b) {
    if (arguments.length === 1) {
      return function(val) {
        return val + a;
      };
    }
    return a + b;
  }
  
  function sub(a, b) {
    if (arguments.length === 1) {
      return function(val) {
        return val - a;
      };
    }
    return a - b;
  }
  
  function mul(a, b) {
    if (arguments.length === 1) {
      return function(val) {
        return val * a;
      };
    }
    return a * b;
  }
  
  function div(a, b) {
    if (arguments.length === 1) {
      return function(val) {
        return val / a;
      };
    }
    return a / b;
  }  
  
  function pipe(...arg) {
    return function (val) {
      for (let i = 0; i < arg.length; i++) {
        val = arg[i](val);
      }
      return val;
    };
  }

let a = add(1,2); // 3
let b = mul(a, 10); // 30

console.log(a,b)

let sub1 = sub(1); // sub1 отнимает от любого числа единицу

let c = sub1(b); // 29

let d = mul(sub(a,1))(c); // 58

console.log(c, d)

let doSmth = pipe(add(d), sub(c), mul(b), div(a)); // функция, последовательно выполняющая эти операции.

let result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290

console.log(result)