module.exports = function(reg,loc){
    console.log(loc)
  if(reg.startsWith(loc)){
    return true;
  }else{
    return false;
  }
  }