//1
let task1 = document.getElementById("task1");
function firstArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        task1.innerHTML =  task1.innerHTML + arr[i] + ' ';
    }
}
firstArray([1,2,3,4,5]);

//2
let task2 = document.getElementById("task2");
function secondArray(arr) {
    task2.innerHTML =  task2.innerHTML + '<b>Заданный массив:</b> [' + arr + ']' + '<br><br>' + '<b>Числа больше -10 и меньше -3: </b>';
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > -10) && (arr[i] < -3)) {
            task2.innerHTML =  task2.innerHTML + arr[i] + ' ';  
        }                
    }      
}
secondArray([-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]);

//3
let task3 = document.getElementById("task3");
function thirdArray() {
    let arr = [];
    let arr2 = [];
    let result = 0;
    for (let i = 23; i <= 57; i++) {
        arr.push(i);              
    }
    
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];              
    }

    i = 23;
    while (i <= 57) {
        arr2.push(i);
        i++;
    }
    task3.innerHTML =  task3.innerHTML + '<b>Массив от 23 до 57 через цикл for:</b> [' + arr + ']' + '<br><br>' + '<b>Массив от 23 до 57 через цикл while:</b> [' + arr2 + ']' + '<br><br>' + '<b>Сумма элементов массива = </b>' + result; 
}
thirdArray();

//4
let task4 = document.getElementById("task4");
function fourthArray(arr) {   
    task4.innerHTML =  task4.innerHTML + '<b>Массив: </b>' + arr + '<br><br>'; 
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let char = num[0];
        if (char == 1 || char == 2 || char == 5) {
            task4.innerHTML =  task4.innerHTML + num + ' ';         
        }
    } 
}
fourthArray(['10', '20', '30', '50', '235', '3000']);

//5
let task5 = document.getElementById("task5");
function fifthArray(arr) {   
     
    for (let i = 0; i < arr.length; i++) {        
        if (arr[i] == 'Суббота' || arr[i] == 'Воскресенье') {
            task5.innerHTML =  task5.innerHTML + '<b style="color: #ff0000;">' + arr[i] + '</b>' + ' ';         
        } else{
            task5.innerHTML =  task5.innerHTML + arr[i] + ' ';
        }
    } 
}
fifthArray(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);

//6
let task6 = document.getElementById("task6");
function sixthArray() {   
    let arr = [];
    let num = 0;
    for (let i = 1; i <= 20; i++) {        
        arr.push(i);
    } 
    num = arr[arr.length - 1];
    task6.innerHTML =  task6.innerHTML + 'Массив: <br>' + arr + '<br><br>';
    task6.innerHTML =  task6.innerHTML + num;
}
sixthArray();

//7
let task7 = document.getElementById("task7");
function seventhArray() {   
    let arr = []; 
    let check = true;  
    while(check){
        let n = prompt('Введите число. Для выхода оставьте поле пустым.', 2);
        if (n === '' || n === ' '){
            check = false;
        } else if (isNaN(n)) {
            alert('Необходимо ввести именно число.');
            // check = false;
        } else {
            arr.push(Number(n));
        }        
    }    
    // task7.innerHTML =  task7.innerHTML + arr[i];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
    } 
    task7.innerHTML =  task7.innerHTML + '<b>Вы ввели числа: </b>' + '[' + arr + ']';
    arr.sort(function(a, b) {
        return a - b;
    })
    task7.innerHTML =  task7.innerHTML + '<br><br><b>Отсортированный массив: </b>' + '[' + arr + ']<br><br>' ;
}

//8
let task8 = document.getElementById("task8");
function eighthArray(arr) {  
    task8.innerHTML =  task8.innerHTML + '<b>Заданный массив</b>: ' + '[' + arr + ']';
    task8.innerHTML =  task8.innerHTML + '<br><b>Перевернутый массив методом reverse</b>: ' + '[' + arr.reverse() + ']';

    let i = arr.length - 1;
    while (i >= 0) {
        arr.push();
        i--;        
    }     
    task8.innerHTML =  task8.innerHTML + '<br><b>Перевернутый массив через цикл while</b>: ' + '[' + arr + ']';   
}
eighthArray([12, false, 'Текст', 4, 2, -5, 0]);

//9
let task9 = document.getElementById("task9");
function ninthArray(arr) {  
    task9.innerHTML =  task9.innerHTML + '<b>Заданный массив</b>: ' + '[' + arr + ']';
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            count += 1;
        }
        
    }
    task9.innerHTML =  task9.innerHTML + '<br><br><b>Количество пустых символов</b> = ' + count;   
}
ninthArray([5, 9, 21, , , 9, 78, , , , 6]);

//10
let task10 = document.getElementById("task10");
function tenthArray() {  
    let arr =  [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
    task10.innerHTML =  task10.innerHTML + '<b>Заданный массив</b>: ' + '[' + arr + ']';
    let sum = 0;
    let check = false;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && !check) { 
            check = true; 
            continue; 
        } else if (arr[i] == 0) {
            result = sum;
        } else if (check) {
            sum += arr[i];
        }
    }
    task10.innerHTML =  task10.innerHTML + '<br><br><b>Сумма элементов массива между двумя нулями</b> = ' + result; 
    return result;  
}
tenthArray();

//11
let task11 = document.getElementById("task11");
function eleventhArray() {
    let line = 0;
    while (true) {
        line = prompt('Выберите высоту фигуры');
        if (line == false || isNaN(line)) {
            alert("Вы не ввели число");                                     
        } else {
            break;
        }           
    }  

    let space = line; //кол-во пробелов в первой строке
    let symbol = 1; //кол-во символов в первой строке

    for (let i = 0; i < line; i++) {
        for (let j = 0; j < space; j++) {
            task11.innerHTML =  task11.innerHTML + '&nbsp;&nbsp;';
        }

        for (let x = 0; x < symbol; x++) {
            task11.innerHTML =  task11.innerHTML + '*';
        }
        space -= 1;
        symbol += 2;
        task11.innerHTML =  task11.innerHTML + '<br>';
    }
}