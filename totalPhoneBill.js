module.exports = function(list) {
  var alist = list.split(', ')
  var totalBill = 0;
  var sms = [];
  console.log(list)
  for (var i = 0; i < alist.length; i++) {
    if (alist[i] === 'call') {
      totalBill += 2.75;

    } else if (alist[i] === 'sms') {
      totalBill += 0.65;

    }
  }
  console.log(totalBill)
  return 'R' + totalBill.toFixed(2);

}
