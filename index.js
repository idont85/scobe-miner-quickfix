var counter = 0;
var bb = 0;
var audio = new Audio('scoobtrim.mp3');
var bd = 0;
var scoobies = 0;
var fake = true;
var scoobprice = 0;
var counttheclicks = 0;
var username = ''
var scobles = 0
var twox = 0
var multiplier = 1
var amountperclick = 0
var scobleprice = 0
function startUp() {
  username = localStorage.getItem('user') || 'user'
  var initial = +localStorage.getItem("clicks") || 0; // Initialize to 0 if not found
  var bbornot = localStorage.getItem("bb") || 0; // Initialize to 0 if not found
  var bdd = +localStorage.getItem("bbd") || 0; // Initialize to 0 if not found
  var scoobieCount = +localStorage.getItem("scoobie") || 0; // Initialize to 0 if not found
  twox = +localStorage.getItem('2xmulti') || 0;
  scobles = +localStorage.getItem('scobles') || 0
  document.getElementById('user').value = username;
  document.getElementById("counter").innerHTML = initial;
  counter = initial;
  counttheclicks = +localStorage.getItem('counttheclicks') || 0;
  document.getElementById('counttheclicks').innerHTML = "You have clicked " + counttheclicks + " times"

  if (twox == 1) {
    multiplier = 2;
  } else {
    multiplier = 1;
  }
  if (bbornot == 1) {
    bb = 1;
    document.getElementById("bbb").style.display = "none";
  }
  if (bdd == 1) {
    bb = 1
    document.getElementById('bbd').style.display = 'none';
  }
  if (twox == 1) {
    document.getElementById('twomulti').style.display = 'none';
  } 
  document.getElementById('scobular').innerHTML = "You have " + scoobieCount + " scoobies";
  scoobies = scoobieCount;
  scoobprice = Math.ceil(scoobies ** 1.7 + 50);
  document.getElementById("scoobie").innerHTML =
    'Scoobie. Price: ' + scoobprice;
  bd = bdd;
  scobleprice = Math.ceil(scobles ** 1.9 + 50000)
  document.getElementById('scoble').innerHTML = 'Buy Scoble. Price: ' + scobleprice

  var sps = countScobe();

  document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
}

function playAudio() {
  audio.volume = 0.24;
  audio.currentTime = 0;
  audio.play();

}

function goClick() {
  counter = +localStorage.getItem('clicks')
  if (bb == 1) {
    if (bd == 1) {
      amountperclick = 100
    } else {
      amountperclick = 3
    }
  } else {
    amountperclick = 1
  }
  var cbb = scoobies * 3;
  amountperclick = amountperclick + cbb 
  amountperclick = amountperclick * multiplier
  counter = counter + amountperclick
  document.getElementById("counter").innerHTML = counter;
  localStorage.setItem("clicks", counter);
  playAudio()
  counttheclicks = counttheclicks + 1
  localStorage.setItem('counttheclicks', counttheclicks)
  document.getElementById('counttheclicks').innerHTML = "You have clicked " + counttheclicks + " times"
}

function getBb() {
  if (counter >= 20) {
    localStorage.setItem("bb", 1);
    bb = 1;
    counter = counter - 20;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("bbb").style.display = "none";
    localStorage.setItem("clicks", counter);
    sps = countScobe()
    document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
    alert("Purchased Upgrade!");
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
    localStorage.setItem('clicks', 0)
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
    localStorage.setItem('scoobie', scoobies)
    counter = counter - scoobprice;
    localStorage.setItem("clicks", counter);
    document.getElementById("counter").innerHTML = counter;
    scoobprice = Math.ceil(scoobies ** 2 + 50);
    document.getElementById("scoobie").innerHTML =
      'Scoobie. Price: ' + scoobprice;
    document.getElementById('scobular').innerHTML = "You have " + scoobies + " scoobies";
    sps = countScobe()
    document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
    alert("Another scoobie is now working for you!");
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
  scoobies = +localStorage.getItem('scoobie') || 0;
  var scoobymoney = scoobies * 3
  var clickmoney = 0
  if (bb == 1) {
    if (bd == 1) {
      clickmoney = 100
    } else {
      clickmoney = 3
    }
  } else {
    clickmoney = 1
  }
  var finalamount = clickmoney + scoobymoney
  finalamount = finalamount * multiplier
  return finalamount
}

// Encryption function
function encrypt(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) + 5; // Shift the character code by 5
    result += String.fromCharCode(charCode);
  }
  return result;
}

// Decryption function
function decrypt(encryptedText) {
  let result = '';
  for (let i = 0; i < encryptedText.length; i++) {
    const charCode = encryptedText.charCodeAt(i) - 5; // Shift the character code back by 5
    result += String.fromCharCode(charCode);
  }
  return result;
}

// Export save function with encryption
function exportSave() {
  // Create an object to store the game state
  var saveData = {
    clicks: counter,
    bb: bb,
    bbd: bd,
    scoobie: scoobies,
    counttheclicks: counttheclicks,
    scobles: scobles
  };

  // Convert the object to a JSON string and encrypt it
  var saveString = encrypt(JSON.stringify(saveData));

  // Display the encrypted save data as an alert or in a text field for the user to copy
  prompt("Copy the following save data: ", saveString)
}

// Import save function with decryption
function importSave() {
  // Get the save data from the input field
  var saveString = document.getElementById("importInput").value;

  try {
    // Decrypt the save data and parse the JSON string into an object
    var decryptedSaveString = decrypt(saveString);
    var saveData = JSON.parse(decryptedSaveString);

    // Update the game state with the imported data
    counter = saveData.clicks || 0;
    bb = saveData.bb || 0;
    bd = saveData.bbd || 0;
    scoobies = saveData.scoobie || 0;
    counttheclicks = saveData.counttheclicks || 0;
    scobles = saveData.scobles || 0;

    // Update the game UI to reflect the imported data
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("counttheclicks").innerHTML = "You have clicked " + counttheclicks + " times";
    if (bb === 1) {
      document.getElementById("bbb").style.display = "none";
    }
    if (bd === 1) {
      document.getElementById("bbd").style.display = "none";
    }
    document.getElementById("scobular").innerHTML = "You have " + scoobies + " scoobies";
    scoobprice = Math.ceil(scoobies ** 1.7 + 50);
    document.getElementById("scoobie").innerHTML = 'Scoobie. Price: ' + scoobprice;

    // Save the imported data to localStorage
    localStorage.setItem("clicks", counter);
    localStorage.setItem("bb", bb);
    localStorage.setItem("bbd", bd);
    localStorage.setItem("scoobie", scoobies);
    localStorage.setItem("counttheclicks", counttheclicks);

    // Notify the user that the import was successful
    alert("Save data imported successfully!");
    location.reload()
  } catch (error) {
    // Handle any parsing errors
    alert("Error importing save data. Please check the format.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var buttonContainer = document.getElementById("button-container");
  var buttons = document.querySelectorAll(".gen");
  buttonContainer.addEventListener("mouseenter", function () {
    buttonContainer.classList.add("active");
  });
  buttonContainer.addEventListener("mouseleave", function () {
    buttonContainer.classList.remove("active");
  });
});

// Add this code to your existing JavaScript code

// Function to update leaderboard
function updateLeaderboard() {
  console.log("Updating leaderboard...");
  // Update Firestore with the user's score or data
  var userScore = document.getElementById('counter').innerHTML; // Replace this with your actual score data
  var useree = username; // Replace with the user's username or identifier

  // Create a Firestore batch
  var batch = db.batch();
  var leaderboardRef = db.collection("leaderboard");

  // Query the leaderboard for messages with the same username
  leaderboardRef.where("username", "==", useree)
    .get()
    .then(function(querySnapshot) {
      // Iterate through the messages with the same username and delete them
      querySnapshot.forEach(function(doc) {
        batch.delete(leaderboardRef.doc(doc.id));
      });

      // Add the new leaderboard entry
      batch.set(leaderboardRef.doc(), {
        username: useree,
        score: userScore,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      // Commit the batched writes
      return batch.commit();
    })
    .then(function() {
      console.log("Leaderboard updated successfully.");
    })
    .catch(function(error) {
      console.error("Error updating leaderboard: ", error);
    });
}


// Call the updateLeaderboard function every 5 minutes after the page loads
setInterval(function() {
  console.log('firing')
  var currentTime = new Date();
  var fiveMinutesInMilliseconds = 5 * 60 * 1000;

  if (currentTime - pageLoadTime >= fiveMinutesInMilliseconds) {
    updateLeaderboard();
  }
}, 60 * 1000); // Check every minute (adjust as needed)

// Record the page load time
var pageLoadTime = new Date();

// Function to populate the leaderboard
function populateLeaderboard() {
  // Fetch the leaderboard data
  db.collection("leaderboard")
    .orderBy("score", "desc") // Order by score in descending order
    .limit(10) // Limit to the top 10 entries
    .get()
    .then(function(querySnapshot) {
      // Clear existing leaderboard entries
      var leaderboardList = document.getElementById("leaderboard-list");
      leaderboardList.innerHTML = "";

      // Create an array to store leaderboard entries
      var leaderboardEntries = [];

      // Populate the leaderboard entries with fetched data and convert scores to numbers
      querySnapshot.forEach(function(doc) {
        var data = doc.data();
        var username = data.username || "Anonymous";
        var score = parseFloat(data.score) || 0; // Convert score to a number

        leaderboardEntries.push({ username, score });
      });

      // Sort the entries by score in descending order
      leaderboardEntries.sort(function(a, b) {
        return b.score - a.score;
      });

      // Populate the leaderboard list with sorted entries
      leaderboardEntries.forEach(function(entry) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
          <span class="username">${entry.username}</span>
          <span class="score">${entry.score} Scobes</span>
        `;

        leaderboardList.appendChild(listItem);
      });
    })
    .catch(function(error) {
      console.error("Error fetching leaderboard data: ", error);
    });
}




// Call the populateLeaderboard function when the page loads
window.addEventListener("load", populateLeaderboard);


// Call the populateLeaderboard function when the page loads
window.addEventListener("load", populateLeaderboard);

setInterval(function() {
  usey = document.getElementById('user').value
  localStorage.setItem('user', usey)

}, 1000)

setInterval (function () {
  var scoblepersecond = scobles * 2000
  counter = counter + scoblepersecond
  document.getElementById('counter').innerHTML = counter;
  localStorage.setItem('clicks',counter)

}, 1000)

function buyScoble() {
  counter = +localStorage.getItem('clicks')
  if (counter >= scobleprice) {
    counter = counter - scobleprice
    localStorage.setItem('clicks',counter)
    localStorage.setItem('scobles', scobles + 1)
    scobles = scobles + 1
    scobleprice = Math.ceil(scobles ** 1.9 + 50000)
    document.getElementById('scoble').innerHTML = 'Buy Scoble. Price: ' + scobleprice
    alert("A scoble is now working for you.")
  } else {
    alert("meanie. You don't have enough scobes")
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
  }
});

function addTwo() {
  counter = +document.getElementById("counter").innerHTML;
  if (counter >= 10000000) {
    localStorage.setItem("2xmulti", 1);
    document.getElementById("twomulti").style.display = "none";
    counter = counter - 10000000;
    document.getElementById("counter").innerHTML = counter;
    localStorage.setItem("clicks", counter);
    twox = 1;
    multiplier = 2;
    sps = countScobe()
    document.getElementById('clickcounter').innerHTML = "You are making " + sps + " scobes per click"
    alert("You are now making 2x profit per click!")
  } else {
    alert("meanie. You don't have enough scobes");
  }
}
