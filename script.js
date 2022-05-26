// 1. Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–11), подростком (12–17), взрослым 
// (18-60) или пенсионером (61– ...).
let age = +prompt("Введите Ваш возраст: ");
if (age >= 0 && age < 12) {
    alert("Вы - ребёнок.");
} else if(age > 11 && age < 18) {
    alert("Вы - подросток.");
} else if(age > 17 && age < 61) {
    alert("Вы - взрослый.");
} else if(age > 60 && age < 120) {
    alert("Вы - пенсионер.");
} else {
    alert("Неправильный возраст!");
}


// 2. Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д).
let digital = +prompt("Нажмите клавишу от 0 до 9: ");
switch (digital) {
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    case 0:
        alert(")");
        break;
    default:
        alert("Неправильный ввод!");
        break;
    }


// 3. Запросить у пользователя трехзначное число и проверить, 
// есть ли в нем одинаковые цифры.
let threeDigitNum = +prompt("Введите трёхзначное число: ");
let digit1 = Math.floor(threeDigitNum / 100);
let digit2 = Math.floor((threeDigitNum % 100) / 10);
let digit3 = threeDigitNum % 10;
(digit1===digit2 || digit===digit3 || digit2===digit3) ? 
alert("Есть одинаковые цифры.") : alert("Нет одинаковых цифр.");


// 4. Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.
let year = +prompt("Введите год: ");
(year % 400 === 0) || ((year % 4 === 0) && (year % 100 != 0)) ?
alert("Год високосный.") : alert("Год НЕ високосный.");


// 5. Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.
let fiveDigitNum = +prompt("Введите пятизначное число: ");
let num1 = Math.floor(fiveDigitNum / 10000);
let num2 = Math.floor(fiveDigitNum / 1000) % 10;
let num4 = Math.floor(fiveDigitNum / 10) % 10;
let num5 = fiveDigitNum % 10;
if(num1 === num5 && num2 === num4) {
    alert(`Число ${fiveDigitNum} является палиндромом.`);
} else {
    alert(`Число ${fiveDigitNum} НЕ является палиндроном.`);
}


// 6. Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR, 
// RUB или AZN, и получает в ответ соответствующую сумму.
let USD = +prompt("Введите количество долларов: ");
let EUR = (0.94 * USD).toFixed(2);
let RUB = (60.35 * USD).toFixed(2);
let AZN = (1.70 * USD).toFixed(2);
let key = prompt("Выберите валюту одной клавишей: EUR - 'e', RUB - 'r', AZN - 'a'.", "e/r/a");
switch (key) {
    case 'e':
        alert(`За ${USD} USD Вы получите ${EUR} EUR.`)
        break;
    case 'r':
        alert(`За ${USD} USD Вы получите ${RUB} RUB.`)
        break;
    case 'a':
        alert(`За ${USD} USD Вы получите ${AZN} AZN.`)
        break;
    default:
        break;
}


// 7. Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%.
let sum = +prompt("Введите сумму покупки: ");
if(sum >= 200 && sum < 300) {
    alert(`К оплате c учётом скидки: ${sum - (sum / 100 * 3)}.`);
} else if (sum >= 300 && sum < 500) {
    alert(`К оплате c учётом скидки: ${sum - (sum / 100 * 5)}.`);
} else if (sum >= 500) {
    alert(`К оплате c учётом скидки: ${sum - (sum / 100 * 7)}.`);
} else {
    alert(`К оплате: ${sum}, скидки нет.`);
}


// 8. Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.
let circle = +prompt("Введите длину окружности: ");
let square = +prompt("Введите периметр квадрата: ");
const PI = 3.14;
let diameterCircle = circle / PI;
let sideSquare = square / 4;
diameterCircle <= sideSquare ? 
alert("Эта окружность поместиться в данный квадрат.") : 
alert("Эта окружность НЕ поместиться в данный квадрат.");