// HW
// 1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface IAnimal {
// 	type: string;
// 	size: string;
// 	animalInfo(animalType: string, animalSize: string): string;
// }
// class Animal implements IAnimal {
// 	type: string;
// 	size: string;
// 	constructor(animalType: string, animalSize: string) {
// 		this.type = animalType;
// 		this.size = animalSize;
// 	}
// 	animalInfo(animalType: string, animalSize: string): string {
// 		return `type: ${animalType}, size: ${animalSize}`;
// 	}
// }
// let cat = new Animal('run', 'middle');
// console.log('тип cat: ', cat.type, ', размер cat: ', cat.size);
// console.log(cat.animalInfo('run', 'middle'));
// let bird = new Animal('fly', 'small');
// console.log('тип bird: ', bird.type, ', тип bird: ', bird.size);
// console.log(bird.animalInfo('run', 'small'));
// let fish = new Animal('sweem', 'small');
// console.log('тип fish: ', fish.type, ', тип fish: ', fish.size);
// console.log(fish.animalInfo('sweem', 'small'));
// 2) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.perimetr = function () {
        var rectanglePerimetr = this.width * 2 + this.height * 2;
        return rectanglePerimetr;
    };
    Rectangle.prototype.area = function () {
        var rectangleSquare = this.width * this.height;
        return rectangleSquare;
    };
    return Rectangle;
}(Shape));
var SQTriangle = /** @class */ (function (_super) {
    __extends(SQTriangle, _super);
    function SQTriangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    SQTriangle.prototype.perimetr = function () {
        var SQTrianglePerimetr = this.width + this.height + Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
        return SQTrianglePerimetr;
    };
    SQTriangle.prototype.area = function () {
        var SQTriangleSquare = this.width * this.height / 2;
        return SQTriangleSquare;
    };
    return SQTriangle;
}(Shape));
var figureRec1 = new Rectangle(3, 4);
console.log('area=', figureRec1.area());
console.log('perimeter=', figureRec1.perimetr());
var figureTriag1 = new SQTriangle(3, 4);
console.log('area=', figureTriag1.area());
console.log('perimeter=', figureTriag1.perimetr());
var figureRec2 = new Rectangle(5, 6);
var figureRec3 = new Rectangle(10, 5);
var sqArray = [figureRec1, figureRec2, figureRec3];
for (var _i = 0, sqArray_1 = sqArray; _i < sqArray_1.length; _i++) {
    var i = sqArray_1[_i];
    console.log('area=', i.area());
}
