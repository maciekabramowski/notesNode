// var square = (x) => {
//   var result = x*x;
//   return result;
// };

//simplified
// var square = (x) => x * x;

//even more simplified(works only if there is only one parameter)
var square = x => x * x;

console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`); //not working
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi, I'm ${this.name}`); //working
  }
};

// user.sayHi(1,2,3);

user.sayHiAlt(1,2,3);
