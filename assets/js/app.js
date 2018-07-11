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
  console.log(firebase);
  

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

  $("#createTrain").on('submit', function(event){
    event.preventDefault();
    console.log($(this).serialize())
    //This is where we'll get inpusts//
    name = $('#name').val().trim();
    destination = $('#destination').val().trim();
    time = $('#time').val().trim();
    frequency = $('#frequency').val().trim();
    
    //need to create an object for holding train info
    var trainInputs = {
      name: name,
      destination: destination,
      time: time,
      frequency: frequency
    }

    //need to push data from inputs to the database
    database.ref().push(trainInputs);

    //test if it's working
    console.log(trainInputs.name);
    console.log(trainInputs.destination);
    console.log(trainInputs.time);
    console.log(trainInputs.frequency);
    
    
  })
 