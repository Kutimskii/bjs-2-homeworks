function parseCount (value) {
  let result = Number.parseFloat(value)
  if (isNaN(result)) {
    throw new Error("Невалидное значение")
  } else {
    return result;
  }
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch (error) {
    return error
  } 
}

class Triangle {
  constructor(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (a + c) < b || (c + b) < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter () {
    let result = (this.a + this.b + this.c)
    return result;
  }
  get area () {
    let p = (this.a + this.b + this.c)/2
    let result = (Math.sqrt((p*(p-this.a)*(p-this.b)*(p-this.c))))
    return +result.toFixed(3);
  }
}

function getTriangle(a,b,c) {
  try {
    return new Triangle(a,b,c)
  } catch (error) {
    return {
      get area () {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter () {
        return "Ошибка! Треугольник не существует";
      }
    }
  }  
}