const Dog = require('./Dog')
const Cat = require('./Cat')
const Mouse = require('./Mouse')

let cat = new Cat('Tom')
let dog = new Dog('Micky')
let mouse = new Mouse('Jerry')

try{

  cat.eat(mouse)
  cat.eat(dog)
  console.log(cat)
} catch(err){
  console.log('Cat can not eat other animal except mouse')
}