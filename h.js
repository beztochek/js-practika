// функция проверки уникальности, должна вернуть массив без дубликатов
function uniqueArr(arr){
    return[...new Set(arr)];

}
console.log(uniqueArr([1,3,5,1,1,5]));

//функция фильтра положительных значений в массиве
function positiveNum(arr){
    return arr.filter(num=>num>0)
}
console.log(positiveNum([9,-8,-6,-89,6,7,6,4,-5]));

//функция для подсчета суммы и среднего числа в массиве
function sumandaverage(arr){
    if(arr.length===0) return{sum:0, average:0};
    let sum= arr.reduce((fsum, num)=> fsum+ num,0);
    return {sum:sum , average : sum/arr.length};
}
console.log(sumandaverage([6,3,2,1]));

//функция которая возвращает максимум из 3-х значений
function getmax(a,b, c){
return Math.max(a, b, c);
}
console.log(getmax(7, 4, 5));

//функция определения четности/нечетности
function iseven(num){
    return num%2===0?"четное":"нечетное";
}
console.log(iseven(7));

//функция подсчета слов в строке (нужно вернуть объект с указанием слова и сколько раз оно повторяется)
function countWords(str){
    let words=str.toLowerCase().match(/[а-яёa-z]+/g)||[];
    let counts={};
    for(let word of words){
        counts[word] =(counts[word]||0)+1;
}return counts;}
console.log(countWords("привет мир мир мир"));

//функция которая возвращает второе по величине уникальное число, если такого нет - вернет null
function secondmax(arr){
    let unique = [...new Set(arr)].sort((a,b)=>b-a);
    return unique.length >= 2 ? unique[1]:null;
}
console.log(secondmax([3,5,3,5,7,3,8]));

//функция подсчета среднего бала
function countes(arr){
if (arr.length===0 )return 0;
let sum= arr.reduce((fsum, num)=> fsum+num,0);
return sum/arr.length;
}console.log(countes([5,5,5,4,5]));

//функция транслитерации (ru - en)
function rte(text) {
    let russian = "ёйцукенгшщзхъфывапролджэячсмитьбю.";
    let english = "`qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let lowerChar = char.toLowerCase();
        let index = russian.indexOf(lowerChar);
        if (index !== -1) {
            let replacement = english[index];
            if (char === char.toUpperCase()) {
                replacement = replacement.toUpperCase();
            }
            result += replacement;
        } else {
            result += char;
        }}
    return result;
}
console.log(rte("пщщв ьщктштп"));



//функция сокращения ФИО
function shortenFIO(fio) {
let parts = fio.trim().split(/\s+/);
if (parts.length === 1) return parts[0];
let surname = parts[0];
let initials = parts.slice(1).map(p => p[0].toUpperCase() + '.').join(' ');
return `${surname} ${initials}`;
}
console.log(shortenFIO("Иванов Иван Иванович"));



//функция группировки по возрасту (приходит массив)
function groupByAge(people) {
return people.reduce((group, person) => {
let age = person.age;
if (!group[age]) group[age] = [];
group[age].push(person);
return group;
}, {});
}console.log(groupByAge([
    {name:"Ivan",age:45}, {name:"Olga" , age:20}, {name: "Oleg ", age:20}]));


//функция генерации пароля
function generatePassword(length) {
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let password = "";
for (let i = 0; i < length; i++) {
password += chars.charAt(Math.floor(Math.random() * chars.length));
}
return password;
}
console.log(generatePassword(6))




//функция проверки пересеченности массивов
    function arraysIntersect(arr1, arr2) {
return arr1.some(item => arr2.includes(item));
}