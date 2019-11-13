function rentCalculator(yearlySalary) {
  var months = 12;
  var oneThird = 0.33;
  var affordableRent = (yearlySalary / months) * oneThird;
  return Math.round(affordableRent);
}


$(document).ready(function() {
    $("#submit").click(function() {
      var income = $("#salary").val();
      var result = rentCalculator(income);
      var friendlyResult = "You should not spend more than $" + result + " on rent each month";

      $(".result").text(friendlyResult);
    });
});

