// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB7q9wSUZWhbypOVk0TyBw35hL3u0m9OE4",
    authDomain: "collaborative-sketch-3a529.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-3a529.firebaseio.com",
    storageBucket: "collaborative-sketch-3a529.appspot.com",
    messagingSenderId: "219433232146"
  };
  firebase.initializeApp(config);
  
  var pointsData = firebase.database().ref();
  
  var points = [];
  
  function setup() {
      var canvas = createCanvas(400, 400);
      background(0);
      fill(255);
      pointsData.on("child_added", function (point) {
          points.push(point.val());
      });
      
      canvas.mousePressed(drawPoint);
      canvas.mouseMoved(drawPointIfMousePressed);
  }
  
  function draw() {
      background(0);
      
      for (var i = 0; i < points.length; i++) {
          var point = points[i];
          ellipse(point.x, point.y, 5, 5);
      }
  }
  
  function drawPoint() {
      pointsData.push({x: mouseX, y: mouseY});
  }
  function drawPointIfMousePressed() {
      if (mouseIsPressed) {
          drawPoint();
      }
  }

  
