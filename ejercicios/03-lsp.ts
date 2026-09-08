interface Shape {
  area(): number;
};

class Rectangle implements Shape {
  constructor(protected width: number, protected height: number) {}

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {

 constructor(protected width: number, protected height: number){};


 setWidth(width: number): void {
    this.width = width;
  };

  setHeight(height: number): void {
    this.height = height;
  };
  area(): number {
    return this.width * this.height;
  }
}


const rectangulo = new Rectangle(1, 1);
const cuadrado = new Square(1, 1);

console.log(cuadrado.area());
