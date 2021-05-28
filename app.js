// // HW
// // 1) написать интерфейс Animal который описывает:
// // тип движения животного(плавает, ходит, бегает) типа стринг
// // что говорит тип стринг
// // и функцию которая возвращает информацию о животном
// // создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
var Cat = /** @class */ (function () {
    function Cat(animalType, animalSize) {
        this.type = animalType;
        this.size = animalSize;
    }
    Cat.prototype.animalInfo = function () {
        return "type: " + this.type + ", size: " + this.size;
    };
    return Cat;
}());
var cat = new Cat('run', 'middle');
console.log('тип cat: ', cat.type, ', размер cat: ', cat.size);
console.log(cat.animalInfo());
var Bird = /** @class */ (function () {
    function Bird(animalType, animalSize) {
        this.type = animalType;
        this.size = animalSize;
    }
    Bird.prototype.animalInfo = function () {
        return "type: " + this.type + ", size: " + this.size;
    };
    return Bird;
}());
var bird = new Bird('fly', 'small');
console.log('тип bird: ', bird.type, ', тип bird: ', bird.size);
console.log(bird.animalInfo());
var Fish = /** @class */ (function () {
    function Fish(animalType, animalSize) {
        this.type = animalType;
        this.size = animalSize;
    }
    Fish.prototype.animalInfo = function () {
        return "type: " + this.type + ", size: " + this.size;
    };
    return Fish;
}());
var fish = new Fish('sweem', 'small');
console.log('тип fish: ', fish.type, ', тип fish: ', fish.size);
console.log(fish.animalInfo());
// // 2) создать абстрактный класс Shape:
// // добавить абстрактные методы perimeter() и area()
// // создать два класса Triangle и Rectangle и унаследовать их от Shape
// // переопределить для каждого класса методы под ваши фигуры
// // кладем в массив экземпляры классов(количество может быть любым но мин 2)
// // проходимся циклом по нему и и высчитываем площадь для каждой фигуры
// abstract class Shape {
// 	abstract perimetr(): number;
// 	abstract area(): number;
// }
// class Rectangle extends Shape {
// 	constructor(public width: number, public height: number) {
// 		super();
// 	}
// 	perimetr(): number {
// 		let rectanglePerimetr = this.width * 2 + this.height * 2;
// 		return rectanglePerimetr;
// 	}
// 	area(): number {
// 		let rectangleSquare = this.width * this.height;
// 		return rectangleSquare;
// 	}
// }
// class SQTriangle extends Shape {
// 	constructor(public width: number, public height: number) {
// 		super();
// 	}
// 	perimetr(): number {
// 		let SQTrianglePerimetr =
// 			this.width + this.height + Math.sqrt(this.width ** 2 + this.height ** 2);
// 		return SQTrianglePerimetr;
// 	}
// 	area(): number {
// 		let SQTriangleSquare = this.width * this.height / 2;
// 		return SQTriangleSquare;
// 	}
// }
// let figureRec1: Shape = new Rectangle(3, 4);
// console.log('area=', figureRec1.area());
// console.log('perimeter=', figureRec1.perimetr());
// let figureTriag1: Shape = new SQTriangle(3, 4);
// console.log('area=', figureTriag1.area());
// console.log('perimeter=', figureTriag1.perimetr());
// let figureRec2: Shape = new Rectangle(5, 6);
// let figureRec3: Shape = new Rectangle(10, 5);
// const sqArray = [ figureRec1, figureRec2, figureRec3 ];
// for (const i of sqArray) {
// 	console.log('area=', i.area());
// }
