// Данные на вход
const people = [
  {
    name: "Alex",
    city: "Moscow",
  },
  {
    name: "Ivan",
    city: "Moscow",
  },
  {
    name: "Joe",
    city: "New York",
  },
  {
    name: "Johan",
    city: "Berlin",
  },
];

const groupByCity = (array) => {
  return array.reduce((acc, person) => {
    const { name, city } = person;

    // Если город уже есть в аккумуляторе, добавляем имя в массив
    if (acc[city]) {
      acc[city].push(name);
    } else {
      // Если города нет, создаем новый массив с именем
      acc[city] = [name];
    }

    return acc;
  }, {});
};

// console.log( groupByCity(people));

// Дана некоторая строка, содержащая символы (, ), {, }, [ и ]. Необходимо определить, является ли данная строка валидной скобочной последовательностью.

// Скобочная последовательность является валидной при выполнении двух условий:

// Открывающие скобки закрываются скобками того же типа
// Открывающие скобки закрываются в правильном порядке

// Данные на выход

const string = "(){(}[{}]";
// const str1 = '('

function isValid(str) {
  const stack = [];
  const book = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let index = 0; index < str.length; index++) {
    const lastElement = stack[stack.length - 1];
    const element = str[index];

    if (book[element]) {
      stack.push(element);
    } else {
      if (book[lastElement] === element) {
        stack.pop();
      } else return false;
    }
  }
  return !!stack.length;
  // return stack.length === 0
}
// console.log(isValid(string)); //false
// console.log(isValid("((}}))][")); //false
// console.log(isValid("(){}[]")); //tr
// console.log(isValid("({[")); //false

const string2 = "(){(}[{}]";

const isValidBrackes = (str) => {
  const book = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (book[str[i]]) {
      stack.push(str[i]);
    } else {
      if (book[stack[stack.length - 1]] === str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
};

isValidBrackes("{}");

//примет сумму и масив с номиналами купюр которые есть в банкомате
//функия вернет массив с количесвтом купюр каждого номинала что бы получилась сумма запрпш
// const bank = (sum, arrBabok) => {
//   const result = [];
//   let count = 0
//   let i = 0
//   while (sum) {
//     if (sum >= arrBabok[i]) {
//       sum -= arrBabok[i];
//       count++
//     } else {
//       result.push(count)
//       count = 0
//       i++
//     };
//   }
//   result.push(count)
//   return arrBabok.map((_, index) => result[index] || 0);
// };

// console.log(bank(17200, [5000, 2000, 1000, 500, 200, 100, 50]));

// [1, 1, 0, 0, 1, 0, 0]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffle = (arr) => {
  // console.log(num);

  // return arr.map((el,i,arr)=>{
  //   const num = Math.floor(Math.random()*arr.length)
  // //  const a = el
  // // console.log(i);

  // arr[i] = arr[num];
  // // const =
  // //  const b = el[num]
  // //  console.log(arr);

  //  return el
  // })
  for (let i = 0; i < arr.length; i++) {
    const num = Math.floor(Math.random() * arr.length);
    const index = arr[i];
    arr[i] = arr[num];
    arr[num] = index
    console.log(num);
    
  }
  return arr
};
console.log(shuffle([5, 4, 3, 2, 1]));
