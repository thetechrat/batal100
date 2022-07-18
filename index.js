var x = 0;
var array = Array();

document.getElementById("enter").onclick = function () {
  array[x] = document.getElementById("discord").value;
  alert("Click OK to enter Raffle");
  x++;
  document.getElementById("discord").value = "";

  var e = "<div>Raffle Entries</div><hr/>";

  for (var y = 0; y < array.length; y++) {
    e += y + ". " + array[y] + "<br/>";
  }
  document.getElementById("entry").innerHTML = e;
};

// GOOGLE AUTH

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}
