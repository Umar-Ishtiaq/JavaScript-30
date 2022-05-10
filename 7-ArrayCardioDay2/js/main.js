const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // some() method atleast one element?
//   const person = people.some(element => {
//       const currentYear = (new Date()).getFullYear();
//       if(currentYear - element.year >= 19){
//           return true;
//       }
//   })
//   console.log(person)

//every() method checks checks all the elemnets.
// const everyOne = people.every((element) => {
//     return  ((new Date()).getFullYear()) - element.year >= 19
// })
// console.log(everyOne)

//find() method works like filter but returns one value
// const findPerson = comments.find(element => element.id === 823423)
// console.log(findPerson)

//findIndex() method finds the index of the specified item
const index = comments.findIndex(element => element.id === 823423)
console.log(index)

//delete item from the array
comments.splice(1,1)
console.log(comments)