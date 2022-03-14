function Mouse (name, action){
  this.name = name
  this.action = action
  this.isDead = false
}

Mouse.prototype.die = function(){
  this.isDead = true
}

module.exports = Mouse