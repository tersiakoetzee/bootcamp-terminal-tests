module.exports = function(salesData) {
  var successfulDept = "";
  var highestSale = 0;
  for (var i in salesData) {
    var aSalesEntry = salesData[i];
    var currentSale = aSalesEntry.sales;

    var currentDepartment = aSalesEntry.department;

    if (currentSale > highestSale) {
      highestSale = currentSale;
      successfulDept = currentDepartment;

    }
  }
  return successfulDept;
}
///test
function mostProfitableDay(data) {
  var thursdaySum = 0;
  var thursdaySumArray = [];
  var compare = 0;
  var successfulDept = "";
  var highestSale = 0;
  for (var i in data) {
    var aSalesEntry = data[i];
    var currentSale = aSalesEntry.sales;
    var currentDay = aSalesEntry.day;

    if (currentDay.startsWith("T")) {
      thursdaySum += currentSale
      thursdaySumArray.push(thursdaySum);

      for (var i = 0; i < thursdaySumArray.length; i++) {
        var aRow = thursdaySumArray[i];
        console.log(aRow);


      }


    }
  }
}