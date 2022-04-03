// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8pL2YwaKU65s7q8_O_2JBLvW3mfCLWzo",
  authDomain: "kwitter-35bbc.firebaseapp.com",
  databaseURL: "https://kwitter-35bbc-default-rtdb.firebaseio.com",
  projectId: "kwitter-35bbc",
  storageBucket: "kwitter-35bbc.appspot.com",
  messagingSenderId: "420034408647",
  appId: "1:420034408647:web:a8c2000cd2be4df5c50ee2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room names:"+Room_names);
      row="<div class='room_name' onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function addRoom(){
  room_name=document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding user name"
  });
  window.location="kwitter_message.html";
}
function logOut(){
  window.location="index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}