// Objects (객체)
const player = {
    name : "nico",
    point : 10,
    fat : true,
};

console.log(player);
console.log(player.name);

// const 자체를 변경하는 것은 안되지만 안의 프로퍼티는 변경이 가능
player.fat = false;
// 원하는 프로퍼티를 만들 수 있다.
player.lastName = "potato";
console.log(player);
player.point += 15;
console.log(player);


//함수 Function
function sayHello(nameOfPerson, age){
    console.log("Hello my name is" + nameOfPerson + " and I'm " + age );
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

const player2 = {
    name : "nico",
    sayHello1 : function (otherPersonsName) {
        console.log("Hello " + otherPersonsName + " nice to meet you!")
    }
}

player2.sayHello1("lynn")

// Return
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

// 조건문
const whatAge = parseInt(prompt("How old are you?"));
console.log(typeof whatAge)

if (isNaN(whatAge)){
    console.log("숫자가 아님. 제발 숫자 입력")
} else {
    console.log("ㄱㅅㄱㅅ")
}