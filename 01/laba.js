//================================
let a = 5;
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;

console.log(typeof a);
console.log(typeof name);
console.log(typeof i);
console.log(typeof double);
console.log(typeof result);
console.log(typeof answer);
console.log(typeof no);
//================================
function calculateSquares() {
    let wpr = 45;  
    let hpr = 21; 
    
    let skvadrat = 5; 

    let wkv = Math.floor(wpr / skvadrat);
    let shkv = Math.floor(hpr / skvadrat);
    
    let total = wkv * shkv;

    return total;
}

console.log(calculateSquares()); 
//================================
i = 2;
a = ++i; 
b = i++; 

console.log("a =", a); 
console.log("b =", b); 
console.log("i =", i); 

if (a === b)        console.log("a = b");
else if (a > b)     console.log("a больше, чем b");
else              console.log("a меньше, чем b");
//================================

result = ("Котик" === "котик") ? "равны" : "не равны";
console.log(result);

result = ("Котик" === "китик") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = ("Кот" === "Котик") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = ("Привет" === "Пока") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (53 === "53") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (false === 0) ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (54 === true) ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (123 === false) ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (true === "3") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (3 === "5мм") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (8 === "-2") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (34 === "34") ? "равны" : "не равны";
console.log(result);  // "не равны"

result = (null == undefined) ? "равны" : "не равны";
console.log(result);  // "не равны"
//================================
let teacherName = "Белодед Николай Иванович";
teacherName = teacherName.toLowerCase();
let inputName = prompt("ENTER ФИО");
inputName = inputName.toLowerCase();
if (teacherName.includes(inputName)) 
        alert("CORRECT");
else    alert("HAHA OSHIBKA");
//================================

let russian = prompt("Сдал экзамен по русскому языку? (да/нет)").toLowerCase() === 'да';
let math = prompt("Сдал экзамен по математике? (да/нет)").toLowerCase() === 'да';
let english = prompt("Сдал экзамен по английскому языку? (да/нет)").toLowerCase() === 'да';

function evaluateStudent(russian, math, english) {
    if (russian && math && english) {
        console.log("тебя переводят на следующий курс.");
    } else if (!russian && !math && !english) {
        console.log("тебя отчисляют.");
    } else {
        console.log("у тебя пересдача.");
    }
}

evaluateStudent(russian, math, english);
//================================
console.log(true+true);
console.log(0+"5");
console.log(5+"мм");
console.log(8/Infinity);
console.log(9*"\n9");
console.log(null-1);
console.log("5"-2);
console.log("5px"-3);
console.log(true-3);
console.log(7||0);
//================================
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + 2); // К четному числу прибавляем 2
    } else {
        console.log(`${i}мм`); // Преобразуем нечетное число в строку вида "Xмм"
    }
}
//================================
const daysOfWeekArray = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const dayNumberm = parseInt(prompt("Введите номер дня недели (1-7):"));

if (dayNumberm >= 1 && dayNumberm <= 7) {
  console.log(daysOfWeekArray[dayNumberm]);
} else {
  console.log("Неверный номер дня недели.");
}


const daysOfWeekObject = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье"
};

const dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));

if (daysOfWeekObject[dayNumber]) {
  console.log(daysOfWeekObject[dayNumber]);
} else {
  console.log("Неверный номер дня недели.");
}
//================================
function createString(param1 = "По умолчанию", param2, param3) {
  return `${param1} ${param2} ${param3}`;
}

const userInput = prompt("Введите третий параметр:");

console.log(
    createString(
        undefined,
        "Второй параметр", 
        userInput)
);
//================================
function params(a, b) {
  if (a === b)  return 4 * a;
  else          return a * b;
}

console.log(params(5, 5)); // Квадрат: периметр 20
console.log(params(5, 10)); // Прямоугольник: площадь 50




const paramsExpression = function(a, b) {
  if (a === b)  return 4 * a;
  else          return a * b;
};

console.log(paramsExpression(7, 7)); // Квадрат: периметр 28
console.log(paramsExpression(3, 6)); // Прямоугольник: площадь 18




const paramsArrow = (a, b) => a === b ? 4 * a : a * b;

console.log(paramsArrow(8, 8)); // Квадрат: периметр 32
console.log(paramsArrow(4, 9)); // Прямоугольник: площадь 36
//================================
debugger;
alert("THE END");
//================================