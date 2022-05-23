export const firstEx =
  'function sayHi() {  \n  console.log(phrase);\n}\nsayHi();\nvar phrase = "Hello";';

export const secondEx =
  'function sayHi() {  \n  console.log(phrase);\n}\nsayHi();\nlet phrase = "Hello";';

export const thirdEx =
  'const bestFood = "Fish and Chips";   \nconst myBestMeal = function () {    \nconsole.log(bestFood);    \nconst bestFood = "Vegetable Fried Rice";    \n};    \nmyBestMeal();';

const rooms1 = {
  room1: ['123', 'qwe', 'asd'],
  room2: ['321', 'asd'],
  room3: ['789', 'zxc', 'err'],
};

const rooms2 = {
  room1: [123, 456, 890],
  room2: [321, 678],
  room3: [789, 12345, 890],
};

type RoomsType<Type extends number | string> = {
  room1: Array<Type>;
  room2: Array<Type>;
  room3: Array<Type>;
};

const fn = <Type extends number | string>(rooms: RoomsType<Type>): Array<Type> => {
  return rooms.room1;
};

fn(rooms2);
fn(rooms1);
