module.exports = function (list, threshold) {

  var over20 = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].qty > threshold) {
      over20.push(list[i]);
    }
  }

  return(over20);
}

// var list = [
//   {name : 'apples', qty : 10},
//   {name : 'pears', qty : 37},
//   {name : 'bananas', qty : 27},
//   {name : 'apples', qty : 3},
// ];

// var re = findItemsOver(list);
// var results = [
//   {name : 'pears', qty : 37},
//   {name : 'bananas', qty : 27},
// ];

