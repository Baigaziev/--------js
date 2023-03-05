//! имя из двух или более слов

// const userName = {
//   name: `Erzhan`,
//   age: 22,
//   "likes Samira": true,
// };
// console.log(userName.name);
// console.log(userName[`likes Samira`]);

//! вычесляемое или передаваемое имя

//? вычесляем имя
//  let firstPat = "likes";
//  let userInfo = {
//   name: `Erzhan`,
//   age: 22,
//   [firstPat + "javascript"]: true,
//  }
//  console.log(userInfo["likes javascript"]);

 //! передаем имя

 let firstPat = `likes`;
 let userInfo = {
  name:`Erzhan`,
  age: 23,
  [firstPat]: true,
 }
 console.log(userInfo[firstPat])

//! Преимущество квадратных скобок

let key = `name`;
console.log(userInfo[key])
 