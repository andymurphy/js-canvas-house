// check to see if the browser supports
// the addEventListener function
if(window.addEventListener){
	window.addEventListener
	(
		'load', // this is the load event
		onLoad, // this is the event handler we are going to write
		false
	);
}

// the window load event handler
function onLoad()
{
	var canvas;
	var context;	
	var houses;
	var rotation;
	var housePosX;
	
	// Initialises the canvas and the context variables
	function initialise(){
		canvas  = document.getElementById('canvas');
		// if it couldn't be found
		if (!canvas)
		{
			// display a pop up error message
			alert('Error: I cannot find the canvas element!');
			return;
		}
		// check that there is a getContext function
		if (!canvas.getContext)
		{
			// display a message box with the error
			alert('Error: no canvas.getContext!');
			return;
		}
		// Get the 2D canvas context.
		context = canvas.getContext('2d');
		if (!context)
		{
			alert('Error: failed to getContext!');
			return; 
		}
		houses = new Array();
		housePosX = -500;
		rotation = 0;
		createHouses();	
		houses[11].setPosition(new Vector(0,0));
		console.log("Initilalise done!");
	}
	// Creates the houses and adds them to the array
	function createHouses(){
		var xPos;
		var yPos;
		//var housePosition = new Vector(-canvas.width / 2, -100);
		var colourChoice = 0;
		for (var y = 0; y < 3; y = y + 1){
			//housePosition.setY((-canvas.width / 2 + 300) + y * 200); // 
			colourChoice = colourChoice + 1;
			for (var x = 0; x < 4; x = x + 1){
				//housePosition.setX(-canvas.width / 2 + x * 200);
				colourChoice = colourChoice + 1;
				houses.push(new House(new Vector(-canvas.width / 2 + x * 200, (-canvas.width / 2 + 300) + y * 200),
												getRandomColour() ,
												0)); //getDoorColour(colourChoice % 2)
			}
		}
		console.log(houses);
	}
	// Returns a colour from a choice of two. 
	function getDoorColour(choice){
		if (choice == 0){
			return "#ff0000"; // red
		}
		return "#00ff00"; // green
	}
	// Returns a random colour
	function getRandomColour() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	// Draws a uniform background colour
	function drawBackground(){
		// set the draw fill style colour to grey
		context.fillStyle = "#ccffff";		//houses
		context.fillRect(-canvas.width / 2, -canvas.height /2, canvas.width,canvas.height);		
	}	
	// The main draw method
	function draw(){
		//console.log("Draw method called!");
		drawBackground();		
		for (var i = 0; i < houses.length - 1; i = i + 1){
			houses[i].draw(context);
		}
		//context.save()
		//context.translate(housePosX,200); // Alters the point on the *canvas* at which it rotates
		//context.rotate(rotation);
		//context.translate(-100,100); // Alters the point on the *object* around which it rotates.
		//houses[11].draw(context);
		//context.restore();		
		houses[11].rotateHouse(context);
	}
	// Calls any update functions that are needed
	function update(){
		//rotation = rotation + 0.05;
		//housePosX = housePosX + 2;
		//if(housePosX == 480){
		//	housePosX = -480;
		//}
		
		houses[11].update();
	}
	function animationLoop(){
		update();
		draw();
	}
	// Call the initialise and draw functions
	initialise();
	context.translate(canvas.width * 0.5, canvas.height * 0.5);	
	setInterval(animationLoop, 1000/60);	
}