enum Gender {
	male = 'male',
	female = 'female'
}

class Deputate {
	name: string;
	age: number;
	gender: Gender;
	honestyDegree: number;
	minBribe: number;
	constructor(name: string, age: number, gender: Gender, honestyDegree: number, minBribe: number) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.honestyDegree = honestyDegree;
		this.minBribe = minBribe;
	}
}

let deputateArray = [
	{
		name: 'Костюк Дмитро Сергійович',
		age: 1993,
		gender: Gender.male,
		honestyDegree: 90,
		minBribe: 10000
	},
	{
		name: 'Абдуллін Олександр Рафкатович',
		age: 1962,
		gender: Gender.male,
		honestyDegree: 50,
		minBribe: 10000
	},
	{
		name: 'Арєв Володимир Ігорович',
		age: 1975,
		gender: Gender.male,
		honestyDegree: 50,
		minBribe: 10000
	},
	{
		name: 'Бардіна Марина Олегівна',
		age: 1992,
		gender: Gender.female,
		honestyDegree: 50,
		minBribe: 10000
	}
];

let dep1 = new Deputate(
	deputateArray[0].name,
	deputateArray[0].age,
	deputateArray[0].gender,
	deputateArray[0].honestyDegree,
	deputateArray[0].minBribe
);

console.log(dep1);

// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)
class Party {
	name: string;
	chairman: string;
	members: any[] = deputateArray;
}
// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір
class Rada {}
