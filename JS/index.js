"user strict";
console.log("Hello word!");

// let userName = "Anna";
// let age = 22;

//  prompt
// let age = prompt("How old are you?");
// let userName = prompt("Your name is: ");
// alert(userName + age);
// alert("Hello," + userName);

// let num_one = prompt("First number");
// let num_two = prompt("Two number");
// let sum = +num_one + +num_two;
// alert(sum);

// typeof

// let age = prompt("How old are you?");
// let year = 2024;
// let your_year = +year - +age;
// alert(your_year + " is your year)");

// let age = +prompt("How old are you?");
// let nation = prompt("How nation are you?");
// if ((nation = "Кореец" || age >= 30)) {
//     console.log("Вход разрешон");
// } else {
//     console.log("Запрещён");
// }

let age = +prompt("Ваш возраст: ");
let name = prompt("Ваше имя: ");
let exp = +prompt("Ваш опыт: ");
let projekts = +prompt("Кол-во проектов: ");
if (
    ((exp >= 5 && age >= exp + 17 && projekts >= 5) || projekts >= 20) &&
    age >= 17 + projekts / 4
) {
    console.log("Вы нам подходите");
} else {
    console.log("Вы нам подходите");
}
