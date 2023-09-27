function foreverMake() {
    var intervalId = setInterval(function() {
      var increaseby = 3
      var increasefinal = 3 * scoobies
      localStorage.setItem('clicks', counter + increasefinal)
      counter = counter + increasefinal
      document.getElementById('counter').value = counter;
  }, 1000);
  }

  if (counter === parseInt(counter, 10))
    alert("data is integer")
  else
    alert("data is not an integer")