module.exports = function(paarlnum){
    var regnum = paarlnum.split(', ')
    var paarl = []
    //console.log(regnum)
    for(var i=0; i<regnum.length; i++){
      var reg = regnum[i];
     // console.log(reg)
       if(reg.startsWith('CJ')){
       paarl.push(reg);
    }
    }
    console.log(paarl)
    return paarl.length;
  }