// Your code goes in here

function calculateTip() {
  var billAmount = document.getElementById('amount').value;
  var serviceQuality = document.getElementById('service').value;
  var numberOfPeople = document.getElementById('numOfPeople').value;

  //check if inputs are empty
  if (billAmount === '' || serviceQuality == 0) {
    alert('You need to fill in all the fields!');
  }
  //check the number of people
  if (numberOfPeople == 1) {
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }
  //calculating the tip
  var total = (billAmount * serviceQuality) / numberOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2); // round the number to 2 decimal points
  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;
}
// tip amount is not visible on load
const displayTip = document.getElementById('totalTip');
displayTip.style.display = 'none';
calculator = document.getElementById('btn');
calculator.addEventListener('click', calculateTip);
