 module.exports = function(townreg,loc){
    var town = townreg.split(',')
    console.log(townreg,loc)
    var regnumber = []
     for (var i=0; i<town.length; i++){
    var reg = town[i];
       console.log(reg)
       if (reg.startsWith(loc)){
      regnumber.push(reg);
       }
     }
    return regnumber;
  }