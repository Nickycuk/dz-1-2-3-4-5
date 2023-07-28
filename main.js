//дз1
// const name = prompt ("Укажите имя")
// const lastName = prompt ("Укажите фамилию")

// if(lastName){
  // alert(name + " " + lastName)
// }
// console.log("Привет" + " " +  name + " "  + lastName);


// let first = prompt("Первое число")
// let second = prompt("Второе число")  

// if (first > second) {
//     alert(first + " Больше чем " + second)
// } else if (first < second) {
//     alert(first + " Меньше чем " + second)
// } else if (first == second) {
//     alert("равны")
// } else {
//     alert("Пусто")
// }



// const color = prompt('Укажите цвет')

// if (color === "зеленый") {
//     alert("идти")
//     console.log(color + " идти");
// } else if (color === "желтый") {
//     alert('ждать')
//     console.log(color + " ждать")
// } else if (color === "красный") {
//     alert("стоять")
//     console.log(color + " стоять");
// } else {
//     alert("unknown color")
//     console.log(color + " неизветный");
// }


// const stars = prompt('укажите количество звёзд')
// let price;

// if (stars === "1") {
//     alert("20$")
//     console.log(" цена на 1 здезд. -  20$");
// } else if (stars === "2") {
//     alert("30$") 
//     console.log("цена на 2 здезд. -  30$");
// } else if (stars === "3") {
//     alert ("50$")
//     console.log("цена на 3 здезд. -  50$");
// } else if (stars === "4") {
//     alert ("70$")
//     console.log("цена на 4 здезд. -  70$");
// } else if (stars === "5") {
//     alert ("120$")
//     console.log("цена на 5 здезд. -  120$");
// } else {
//     alert("Такого количества звёзд нет")
//     console.log("Такого количества звёзд нет");
// }


// const stars = prompt('укажите сумму')

// if(stars < 31) {
//     console.log('за 30 и меньше долларов вам предоставляется отели с 1 и 2 здездам');
// } else if (stars < 71) {
//     console.log('за 70 и меньше долларов вам предоставляется отели с 3 и 4 здездам');
// } else if (stars < 121) {
//     console.log('за 120 и меньше долларов вам предоставляется отел с 5 здездам');
// }

//дз2
// let triangle = "*";

// do {
//     console.log(triangle);
//     triangle += "*";
// } while (triangle.length <= 7);



// for (let i = 1; i <= 100; i++) {
//     if ( !(i % 3) && !(i % 5) ) {
//         console.log(i, "FizzBuzz");
//     } else if ( !(i % 3) ) {
//         console.log(i, "Fizz");
//     } else if ( !(i % 5) ) {
//         console.log(i, "Buzz");
//     }
// }



// let DeskSize = 8,
//     totalSize = DeskSize * DeskSize,
//     line = "",
//     flag = true;

// function createLine(DeskSize, flag) {
//     let result = "";
//     for (let i = 0; i < DeskSize; i++) {
//         (i % 2) ? result += "#" : result += " ";
//     }
//     if (flag) {
//         result = reverseString(result);
//     }
//     return result;
// }

// function reverseString(str) {
//     let result = "";
//     for (let i = str.length - 1; i > 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

// for (let i = 1; i <= DeskSize; i++) {
//     if (flag) {
//         flag = false;
//     } else {
//         flag = true;
//     }
//     console.log(createLine(DeskSize, flag));
// }



// let isFriend = true;    
// let isOnline = true;    
// let isBusyMode = false; 

// if (isFriend && isOnline && !isBusyMode) {
//   console.log("Можно открыть чат с пользователем.");
// } else {
//   console.log("Невозможно открыть чат с пользователем.");
// }


// let subscription = "pro"; 

// if (subscription === "pro" || subscription === "vip") {
//   console.log("Доступ разрешен. Можно просмотреть контент.");
// } else {
//   console.log("Доступ запрещен. Требуется подписка pro или vip.");
// }

//дз3

// let triangle = "*";

// do {
//     console.log(triangle);
//     triangle += "*";
// } while (triangle.length <= 7);



// for (let i = 1; i <= 100; i++) {
//     if ( !(i % 3) && !(i % 5) ) {
//         console.log(i, "FizzBuzz");
//     } else if ( !(i % 3) ) {
//         console.log(i, "Fizz");
//     } else if ( !(i % 5) ) {
//         console.log(i, "Buzz");
//     }
// }



// let DeskSize = 8,
//     totalSize = DeskSize * DeskSize,
//     line = "",
//     flag = true;

// function createLine(DeskSize, flag) {
//     let result = "";
//     for (let i = 0; i < DeskSize; i++) {
//         (i % 2) ? result += "#" : result += " ";
//     }
//     if (flag) {
//         result = reverseString(result);
//     }
//     return result;
// }

// function reverseString(str) {
//     let result = "";
//     for (let i = str.length - 1; i > 0; i--) {
//         result += str[i];
//     }
//     return result;
// }

// for (let i = 1; i <= DeskSize; i++) {
//     if (flag) {
//         flag = false;
//     } else {
//         flag = true;
//     }
//     console.log(createLine(DeskSize, flag));
// }



// let isFriend = true;    
// let isOnline = true;    
// let isBusyMode = false; 

// if (isFriend && isOnline && !isBusyMode) {
//   console.log("Можно открыть чат с пользователем.");
// } else {
//   console.log("Невозможно открыть чат с пользователем.");
// }




// let subscription = "pro"; 

// if (subscription === "pro" || subscription === "vip") {
//   console.log("Доступ разрешен. Можно просмотреть контент.");
// } else {
//   console.log("Доступ запрещен. Требуется подписка pro или vip.");
// }


//дз4



// function getFirstListItemText() {
// const firstLiItem = document.querySelector('.list-item');
// return firstLiItem.textContent;
// }
// let green = document.querySelector('.green')
// console.log(green.textContent);



// let ul = document.getElementsByTagName('li')
// console.log(ul);



// let textItems = document.querySelectorAll('.list-item')
// function getElements() {
//   console.log(textItems);
// }
// getElements();





// let lists = document.querySelectorAll('.list-item')
// function getClasses() {
//   for (let i = 0; i < lists.length; i++) {
//     console.log(lists[i].textContent);
//   }
// }
// getClasses();





// function getTestDataIds() {
//     const listItems = document.querySelectorAll('.list-item');
//     const testDataIds = [];
//     for (let i = 0; i < listItems.length; i++) {
//       testDataIds.push(listItems[i].getAttribute('data-test-id'));
//     }
//     return testDataIds;
// }
// console.log(getTestDataIds());










// const lists = document.querySelectorAll('li');
// function getClasses() {
//   for(let i = 0; i < lists.length; i++) {
//     lists[i].className.includes(lists[i].textContent) === false ? console.log(lists[i])  : ''
//  }
// }
// getClasses();






// const list = document.getElementsByClassName('list-item');

// function changeText() {
//   for(let i = 0; i < list.length; i++){
//     list[i].textContent = list[i].getAttribute('data-test-id') + ' ' + list[i].textContent;
//   }
// }
// changeText()





// document.getElementById('secret-login').value = 'You were hacked';
