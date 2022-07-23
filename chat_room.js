function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}

function addRoom()
{
room_name = document.getElementById("room_name").ariaValueMax;

firebase.database().ref("/").child(room_name).update({
});

localStorage.setItem("room_name" , room_name);

window.location = "chat_page.html";
}

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({ 
    purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);

window.location = "chat_room.html";
}

function getData() {firebase.database().ref("/").on('value,' function(snapshot) {document.getElementById("output")innerHTML = "";(snapshot).forEach(function(childSnapshot) {childKey = childSnapshot.key;}
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNsame(this,.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHtml += row;
//End code
});});}
getData();

function redirectToRoomNsame(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "chat_room.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}       

var firebaseConfig = {
    apiKey: "AIzaSyB1SozrK817KXHmTU3mgMnzt5zKuayGYKE",
    authDomain: "project-6309474482452637135.firebaseapp.com",
    databaseURL: "https://project-6309474482452637135-default-rtdb.firebaseio.com",
    projectId: "project-6309474482452637135",
    storageBucket: "project-6309474482452637135.appspot.com",
    messagingSenderId: "822195499070",
    appId: "1:822195499070:web:8ac11f1c92a64ec47f616f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
room_name = document.getElementById("room_name").ariaValueMax;

firebase.database().ref("/").child(room_name).update({
});

localStorage.setItem("room_name" , room_name);

window.location = "chat_room.html";
}

function send() 
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value',
function(snapshot) { document.getElementByld("output").innerHTML = ""'
snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; childData =
childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey:
message_data = childData;

//Start code
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag+ message_with_tag +like_button + span_with_tag;
//End code
getData ();
}