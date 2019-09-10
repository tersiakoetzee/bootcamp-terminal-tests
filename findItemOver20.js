module.exports = function (itemList) {

  var over20 = [];
  for (var i = 0; i < itemList.length; i++) {
    if (itemList[i].qty > 20) {
      over20.push(itemList[i]);
    }
  }

  return over20;
}

// var itemList = [
//   {name : 'apples', qty : 10},
//   {name : 'pears', qty : 37},
//   {name : 'bananas', qty : 27},
//   {name : 'apples', qty : 3},
// ];


//  findItemsOver20(itemList);
