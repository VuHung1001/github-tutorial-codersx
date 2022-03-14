function Mouse (name, action){
  this.name = name
  this.action = action
  this.dead = false
}

Mouse.prototype.die = function(){
  this.dead = true
}

module.exports = Mouse