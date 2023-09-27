var counter = 0;
var bb = 0;
var bd = 0;
var scoobies = 0;
var fake = true;
var scoobprice = 0;

function startUp() {
  var initial = +localStorage.getItem("clicks") || 0; // Initialize to 0 if not found
  var bbornot = localStorage.getItem("bb") || 0; // Initialize to 0 if not found
  var bdd = +localStorage.getItem("bbd") || 0; // Initialize to 0 if not found
  var scoobieCount = +localStorage.getItem("scoobie") || 0; // Initialize to 0 if not found

  document.getElementById("counter").innerHTML = initial;
  counter = initial;



  if (bbornot == 1) {
    bb = 1;
    document.getElementById("bbb").style.display = "none";
  }
  if (bdd == 1) {
    bb = 1
    document.getElementById('bbd').style.display = 'none';
  }
  document.getElementById('scobular').innerHTML = "You have " + scoobieCount + " scoobies";
  scoobies = scoobieCount;
  scoobprice = Math.ceil(scoobies ** 1.7 + 50);
  document.getElementById("scoobie").innerHTML =
    'Scoobie. Price: ' + scoobprice;
  bd = bdd;

  var sps = countScobe();

  document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
}

function goClick() {
  if (bb == 1) {
    if (bd == 1) {
      counter = counter + 50
    } else {
      counter = counter + 3
    }
  } else {
    counter = counter + 1
  }

  var cbb = scoobies * 3;
  counter = counter + cbb;
  document.getElementById("counter").innerHTML = counter;
  localStorage.setItem("clicks", counter);
}

function getBb() {
  if (counter >= 20) {
    localStorage.setItem("bb", 1);
    bb = 1;
    alert("Purchased Upgrade!");
    counter = counter - 20;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("bbb").style.display = "none";
    localStorage.setItem("clicks", counter);
    sps = countScobe()
    document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
  } else {
    alert("meanie. You don't have enough scobes.");
  }
}

function resetScore() {
  var ok = prompt("Are you sure that you want to reset your score. If so, type reset");
  if (ok == "reset") {
    localStorage.clear();
    counter = 0;
    localStorage.setItem("clicks", counter);
    document.getElementById("counter").innerHTML = 0;
    alert("Score Reset!");
    bb = 0;
    location.reload();
  } else {
    alert("Score not erased. Reason: Incorrect Password/Canceled");
  }
}

function getSc() {
  counter = +document.getElementById("counter").innerHTML;
  if (counter >= scoobprice) {
    localStorage.setItem("scoobie", scoobies + 1);
    scoobies = scoobies + 1;
    counter = counter - scoobprice;
    localStorage.setItem("clicks", counter);
    document.getElementById("counter").innerHTML = counter;
    alert("Another scoobie is now working for you!");
    scoobprice = Math.ceil(scoobies ** 2 + 50);
    document.getElementById("scoobie").innerHTML =
      'Scoobie. Price: ' + scoobprice;
    document.getElementById('scobular').innerHTML = "You have " + scoobies + " scoobies";
    sps = countScobe()
    document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
  } else {
    alert("meanie. You don't have enough scobe");
  }
}

function getBd() {
  counter = +document.getElementById("counter").innerHTML;
  if (counter >= 10000) {
    localStorage.setItem("bbd", 1);
    document.getElementById("bbd").style.display = "none";
    counter = counter - 10000;
    document.getElementById("counter").innerHTML = counter;
    localStorage.setItem("clicks", counter);
    bd = 1;
    sps = countScobe()
    document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
    alert("Make sure to vote Mustafa Azhar for president! He doesn't rest, 'till you get the best!")
    alert("Purchased Upgrade!")
  } else {
    alert("meanie. You don't have enough scobes");
  }
}

function countScobe() {
  scoobies = +localStorage.getItem('scoobie')
  var scoobymoney = scoobies * 3
  var clickmoney = 0
  if (bb == 1) {
    if (bd == 1) {
      clickmoney = 50
    } else {
      clickmoney = 3
    }
  } else {
    clickmoney = 1
  }
  var finalamount = clickmoney + scoobymoney
  return finalamount
}