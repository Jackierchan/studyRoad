function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) { //func.length是参数的长度
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }