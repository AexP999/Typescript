var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var Deputate = /** @class */ (function () {
    function Deputate(name, age, gender, honestyDegree, minBribe) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestyDegree = honestyDegree;
        this.minBribe = minBribe;
    }
    return Deputate;
}());
var deputateArray = [
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
var dep1 = new Deputate(deputateArray[0].name, deputateArray[0].age, deputateArray[0].gender, deputateArray[0].honestyDegree, deputateArray[0].minBribe);
console.log(dep1);
// 2) Партія
//    - назва
//    - голова (Депутат)
//    - члени партії (Масив депатутатів)
var Party = /** @class */ (function () {
    function Party() {
        this.members = deputateArray;
    }
    return Party;
}());
// 3) Верхрвна рада
//    - масив партій
//    - решті полів на вибір
var Rada = /** @class */ (function () {
    function Rada() {
    }
    return Rada;
}());
