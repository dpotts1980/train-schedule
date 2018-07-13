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

    /*test if it's working
    console.log('test', trainInputs.name);
    console.log(trainInputs.destination);
    console.log(trainInputs.time);
    console.log(trainInputs.frequency);*/
    
    //Clears all the input boxes
    $("#name").val("");
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");
  });

  //create firebase event for adding trains//
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    //console.log(childSnapshot.val());

  //storing inputs into varables//
  var trainByName = childSnapshot.val().name;
  var trainByDestination = childSnapshot.val().destination;
  var trainByTime = childSnapshot.val().time;
  var trainByFrequency = childSnapshot.val().frequency;

  //checking to see if i'm getting values on the snapshot//
  console.log(trainByName);
  console.log(trainByDestination);
  console.log(trainByTime);
  console.log(trainByFrequency);
  //this is where i started messing with the moment//

  var howOftenTrainArrives = 20;

  //time is 09:00 AM
  var timeOfFirstTrain = "09:00";

  //time is subtracted from minutes//
  var timeOfFirstTrainConverted = moment(timeOfFirstTrain, "HH:mm").subtract(5,"minutes");
  console.log(timeOfFirstTrainConverted);
  
  //current time//
  var currentTime = moment();
  console.log("The Time is " + moment(currentTime).format('hh:mm'));
  

  //Calculation the Difference between times//
  var timeBetweenTrains = moment().diff(moment(timeOfFirstTrainConverted), "minutes");
  console.log("Difference in Time: " + timeBetweenTrains);
  
  //calculaing the remainder
  var timeRemaining = timeBetweenTrains % howOftenTrainArrives;
  console.log(timeRemaining);

  //minutes until the next train arrives//
  var theMinutesTilNextTrain = howOftenTrainArrives - timeRemaining;
  console.log("The next train will arrive in " + theMinutesTilNextTrain + " minutes!");

  //the next train arrives//
  var nextTrain = moment().add(theMinutesTilNextTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
  
  });
  //adding new schedule of the data we get from firebase//
  function createSchedule() {
    $('#schedule').on('click', function(event) {
      event.preventDefault();
      var infoFromForm = $('#createTrain').val().trim();
        if(infoFromForm === "") {
          return false
        }
      trainInputs.push(infoFromForm);
      var trainTimes = $('<tr>').text(infoFromForm)
      console.log(trainTimes);
      

    });

  }

 