function Horse(name){
  this.name = name
}

Horse.prototype.run = function(){
  console.log('Running');
  
}

module.exports = Horse