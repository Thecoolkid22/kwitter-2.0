var firebaseConfig = {
    apiKey: "AIzaSyCGcPoYam_KXvqSXXQdWfD_XEwMC9gfZic",
    authDomain: "kwitter-3f3ad.firebaseapp.com",
    databaseURL: "https://kwitter-3f3ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-3f3ad",
    storageBucket: "kwitter-3f3ad.appspot.com",
    messagingSenderId: "519244593381",
    appId: "1:519244593381:web:3354dcb119949626113c0c"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
      });
  }