 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCHhPcgO2vQokI5MleoyEWVWYWU-1pyAJ8",
    authDomain: "train-schedule-303f6.firebaseapp.com",
    databaseURL: "https://train-schedule-303f6.firebaseio.com",
    projectId: "train-schedule-303f6",
    storageBucket: "train-schedule-303f6.appspot.com",
    messagingSenderId: "830034718108"
  };
  firebase.initializeApp(config);


  //variable to store database name
  var database = firebase.database();
 
  //Object to store entire firebase database as JSON object 
  var firebaseDataObject = null;
 
  //variable to store key of object to update.
  var updateKey;
 
  //variable to hold input values
  var name;
  var destination;
  var time;
  var frequency;
 