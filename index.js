class Calculator {
  constructor(x, y) {
    (this.pi = Math.PI), 
    (this.e = Math.E);
  }

  //getter

  //methods
  ratio(x, y, width) {
    return (x / y) * width;
  }

  percentage(x, y) {
    return (x % y) / 100;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }

  modulation(x, y) {
    return  x % y;
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}

calculate = new Calculator();
//console.log(calculate.pi);
//console.log(calculate.e);

console.log(calculate.ratio(66, 921, 222)); //15.908794788273617
console.log(calculate.percentage(392, 38)); //0.12
console.log(calculate.add(392, 8)); //400
console.log(calculate.subtract(392, 92)); //300
console.log(calculate.multiply(3, 2)); //6
console.log(calculate.divide(500, 10)); //50
console.log( calculate.modulation(50008, 20) );//8
console.log(calculate.elevate(10, 2)); //100
console.log(calculate.sqrt(30)); //5.477225575051661
