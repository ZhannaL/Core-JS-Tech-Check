export const firstEx =
  'let name = "John"; \nfunction sayHi() { \n \xa0 console.log("Hi, " + name);\n}\n name = "Pete";\n sayHi();';

export const secondEx =
  'function makeWorker() {  \n const name = "Pete"; \n return function () { \n \xa0 console.log("Hi, " + name);      \n };  \n} \nconst name = "John"; \nconst work = makeWorker(); \nwork();';

export const thirdEx =
  'function makeCounter() {    \n \xa0let count = 0;    \n \xa0return function() {      \n \xa0\xa0 return count++;       \n\xa0};      \n}      \nlet counter = makeCounter();   \ncounter(); // 0 \ncounter(); // 1      \ncounter() ; // 2 \nlet counter1 = makeCounter(); \nlet counter2 = makeCounter();  \n counter1(); // 0  \n counter1(); // 1   \n counter2(); // 0 ';
