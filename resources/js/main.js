// create matching pairs
function generateCardValues() {
  var values = [];
  for (var i = 1; i <= 8; i++) {
    values.push(i);
    values.push(i);
  }
  console.log(values);
  var randomValues = [];
  while (values.length > 0) {
    var index = Math.floor(Math.random() * 7);
    console.log(index);
    // randomValues.push(values[index]);
    values = values.splice(index,1);
  }
  console.log(values);
}
