// class User {
// 	name: string;
// 	constructor(_name: string) {
// 		this.name = _name;
// 	}
// }
// const tom: User = new User('Том');
// const header = this.document.getElementById('header');
// header.innerHTML = 'Привет ' + tom.name;
// let age: number = 22;
// let age:any = 22;
// let age:string | number = 22;
// console.log(age);
// age = 'Hello'
//
// function mulpiplier(a: number, b: number): number {
// 	return a * b;
// }
// function mulpiplier(a: number, b?: number): void {
//   console.log(a * b);
// }
//
// console.log(mulpiplier(10, 8));
// //
// // console.log(number);
//
// class Car {
//   protected year: number;
//   private producer: string;
//   public power: number = 200;
//
//   constructor(year: number, producer: string) {
//     this.year = year;
//     this.producer = producer;
//   }
//
//   protected changePower(newPower: number): void {
//     this.power = newPower;
//   }
//
//   private privateTest() {
//     console.log('TEST')
//   }
// }
//
// class SuperCar extends Car {
//   public color: string;
//
//   constructor(year: number, producer: string, color: string) {
//     super(year, producer);
//     this.color = color;
//   }
//
//   changePower() {
//
//   }
//
//   privateTest() { // Will throw an error
//
//   }
// }
//
// const car1 = new Car(2008, 'Vaz');
// const superCar = new SuperCar(2000, 'Mazda', 'red');
//
// console.log(car1);
// console.log(superCar);
//
// console.log(car1);
// const user = {
//   name: 'Viktor',
//   laptop: {
//     model: 'Dell',
//     memory: 16
//   },
//   car: {
//     year: 2007
//   },
//   bike: {
//     price: 9999
//   }
// }
//
// // console.log(user && user.bike && user.bike.price && user.bike.price.currency);
// console.log(user?.bike?.price?.currency); //Elvis
// let names: string[] = ['Vova', 'Anton', 'Dimas'];
// let names2: Array<string | number> = ['Vova', 'Anton', 'Dimas'];
// // names = ['Khrystyna'];
// // names = 33
// // ENUM
// enum EGenders {
//   MALE = 'male',
//   FEMALE = 'female',
// }
// interface ICar {
//   color: string
// }
// interface IUser {
//   age: number,
//   name: string,
//   gender: EGenders,
//   wife?: boolean,
//   cars?: [ICar],
//   goWork: Function
// }
// function userLogger(users: Array<IUser>): void {
//   users.forEach((user) => {
//     user.cars?.forEach(car => { // Skip loop when array is not present
//       console.log(car.color);
//     })
//   })
// }
// let ivan: IUser = {
//   age: 22,
//   name: 'Ivan',
//   wife: false,
//   gender: EGenders.MALE,
//   goWork: () => {}
// }
// let viktor: Partial<IUser> = { // Important
//   age: 25,
//   name: 'Viktor'
// }
// userLogger([ivan]);
// // KEYOF
// const keys: Array<keyof IUser> = ["age", "cars", "goWork", "name", "wife"]
// function getValueOfKey(key: keyof IUser): void {
//   console.log(ivan[key])
// }
// getValueOfKey('wife')
// // PROMISE example from smak.shop
// // createTokenPair(tokenObject: Partial<IAccessToken>): Promise<IAccessToken> {
// //   const tokensToCreate = new AccessTokenModel(tokenObject);
// //
// //   return tokensToCreate.save();
// // }
// // ABSTRACT CLASS
// abstract class ACar {
//   wheels: number;
//   power: number;
//   constructor(wheels: number, power: number) {
//     this.wheels = wheels;
//     this.power = power;
//   }
//   ride(): void {
//     console.log(`Ride with ${this.power * 2} km\h`)
//   }
// }
// // const car = new ACar()
// class Car extends ACar{
//   color: string = 'white';
//   constructor(wheels: number, power: number, color?: string) {
//     super(wheels, power);
//   }
// }
// const bibizika = new Car(4, 100);
// bibizika.ride();
// клас Верховна рада
// поля:
// масив фракцій
// методи:
// додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// metanit Функции как параметры других функций
// function sum(x: number, y: number): number {
// 	return x + y;
// }
// function multiply(a: number, b: number): number {
// 	return a * b;
// }
// function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {
// 	return op(x, y);
// }
// console.log(mathOp(10, 20, sum)); // 30
// console.log(mathOp(10, 20, multiply)); // 200
// type Operation = (a: number, b: number) => number;
// function mathOp(x: number, y: number, op: Operation): number {
// 	return op(x, y);
// }
// let sum1: Operation = function(x: number, y: number): number {
// 	return x - y;
// };
// console.log(mathOp(10, 20, sum1)); // 30
// Стрелочные функции
// function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
// 	let result = operation(x, y);
// 	return result;
// }
// console.log(mathOp(10, 20, (x, y) => x + y)); // 30
// console.log(mathOp(10, 20, (x, y) => x * y)); // 200
// Объединения union
// function printSentence(words: string[] | string) {
// 	// если words - строка
// 	if (typeof words === 'string') {
// 		console.log(words);
// 	} else {
// 		// Если words - массив string[]
// 		console.log(words.join(' '));
// 	}
// }
// printSentence([ 'Язык', 'программирования', 'TypeScript' ]);
// printSentence('Язык программирования JavaScript');
// Объекты
// function printUser(user: { name: string; age: number }) {
// 	console.log(`name: ${user.name}  age: ${user.age}`);
// }
// let bob = { name: 'Bob', age: 44, isMarried: true };
// printUser(bob);
// массивы
// function printUsers(users: readonly string[]) {
//     for(const user of users){
//         console.log(user);
//     }
// }
// function usersToString(users: ReadonlyArray<string>): String{
//     return users.join(", ");
// }
// const people: readonly string[]= ["Tom", "Bob", "Sam"];
// printUsers(people);
// console.log(usersToString(people));
// Неопределенный набор и наполнение параметров
// function sum(...args: number[]): number {
// 	let result = 0;
// 	for (let i = 0; i < args.length; i++) {
// 		result += args[i];
// 	}
// 	return result;
// }
// const numbers = [ 1, 3, 5, 7, 9 ] as const;
// let num = sum(...numbers);
// console.log(num); // 18
function sum(a, b) {
    return a + b;
}
var numbers = [1, 3];
var num = sum.apply(void 0, numbers); // ! Ошибка - функция sum принимает только два параметра
console.log(num); // 18
