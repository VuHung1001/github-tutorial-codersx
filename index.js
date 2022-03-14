const Dog = require('./Dog')
const Cat = require('./Cat')

let cat = new Cat('Tom')
let dog = new Dog('Micky')
dog.sayHi()
dog.eat(cat)
console.log(dog)