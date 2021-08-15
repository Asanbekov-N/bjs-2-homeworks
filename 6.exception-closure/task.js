function parseCount(parsValue) {
  let countParse = Number.parseInt(parsValue, 10);
  if (isNaN(countParse)) throw new Error('Невалидное значение');
  return countParse
}

function validateCount(value) {
  try {
        return parseCount(value);
  } catch (Error) {
        return Error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || c + b < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let perimeter = this.getPerimeter() / 2;
    return +Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
      return new Triangle(a, b, c);
  } catch {
      return {
        getArea: function () {
          return 'Ошибка! Треугольник не существует';
        },

        getPerimeter: function () {
          return 'Ошибка! Треугольник не существует';
        },
      }
  }
}