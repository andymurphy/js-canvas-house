var House = (function () {
	function House(pPosition, pDoorColour, pRotation){
		this.setPosition(pPosition);
		this.setDoorColour(pDoorColour);
		this.setRotation(pRotation);
	};
	
	// Getter for the position of the house
	House.prototype.getPosition = function(){
		return this.mPosition;	
	};
	
	// Setter for the position of the house
	House.prototype.setPosition = function (pPosition){
		this.mPosition = pPosition;
		//console.log("position set");
	};
	
	// Getter for the door colour of the house
	House.prototype.getDoorColour = function(){
		return this.mDoorColour;
	};
	
	// Setter for the door colour of the house
	House.prototype.setDoorColour = function(pDoorColour){
		this.mDoorColour = pDoorColour;
		//console.log("Colour set");
	};
	
	// Getter for the rotation
	House.prototype.setRotation = function(pRotation){
		this.mRotation = pRotation;
		//console.log("rotation set");
	};
	
	House.prototype.getRotation = function(){
		return this.mRotation;
	};
	
	// The draw function for the house object
	House.prototype.draw = function (pContext){
		//console.log("House draw method called.");
		this.drawRoof(pContext);
		this.drawWall(pContext);
		this.drawDoor(pContext);
		this.drawWindowPane(pContext);
		this.drawRightWindow(pContext);
	};
	
	// The function to draw the roof
	House.prototype.drawRoof = function(pContext){
		//console.log("House drawRoof method called.");
		pContext.beginPath();
		pContext.lineWidth = 3;
		pContext.strokeStyle = "#000000";
		pContext.fillStyle = "#ee4400";
		pContext.moveTo(this.getPosition().getX() + 0,this.getPosition().getY() + -100);
		pContext.lineTo(this.getPosition().getX() + 100,this.getPosition().getY() + -200);
		pContext.lineTo(this.getPosition().getX() + 200,this.getPosition().getY() + -100);
		pContext.lineTo(this.getPosition().getX() + 0,this.getPosition().getY() + -100);
		pContext.fill();
		pContext.stroke();
	};  // TODO Need to remove the this.getPosition().getX() from all of these and just
		//	use these values in the translate
	
	// The function to draw the wall
	House.prototype.drawWall = function(pContext){
		//console.log("House drawWall method called.");
		pContext.beginPath();
		pContext.lineWidth = 4;
		pContext.strokeStyle = "#000000";
		pContext.fillStyle = "#eeeeee";	
		pContext.moveTo(this.getPosition().getX() + 0, this.getPosition().getY() + -100);		
		pContext.lineTo(this.getPosition().getX() + 200, this.getPosition().getY() + -100);
		pContext.lineTo(this.getPosition().getX() + 200, this.getPosition().getY() + 0);
		pContext.lineTo(this.getPosition().getX() + 0,this.getPosition().getY() + 0);
		pContext.closePath(this.getPosition().getX() + 0,this.getPosition().getY() + -100);
		pContext.fill();
		pContext.stroke();
	};
	
	// The function to draw the door
	House.prototype.drawDoor = function(pContext){
		pContext.beginPath();
		pContext.lineWidth = 5;
		pContext.strokeStyle = "#000000";
		pContext.fillStyle = this.getDoorColour();
		pContext.fillRect(this.getPosition().getX() + 80, this.getPosition().getY() + -80,40,80)
		pContext.strokeRect(this.getPosition().getX() + 80, this.getPosition().getY() + -80,40,80)
	};
	
	// The function to draw a window pane
	House.prototype.drawWindowPane = function(pContext){
		pContext.beginPath();
		pContext.lineWidth = 5;
		pContext.strokeStyle = "#000000";
		pContext.fillStyle = "#3333bb";		
		pContext.fillRect(this.getPosition().getX() + 20, this.getPosition().getY() + -80,20,20);
		pContext.strokeRect(this.getPosition().getX() + 20, this.getPosition().getY() + -80,20,20);
		pContext.fillRect(this.getPosition().getX() + 40, this.getPosition().getY() + -80,20,20);
		pContext.strokeRect(this.getPosition().getX() + 40, this.getPosition().getY() + -80,20,20);
		pContext.fillRect(this.getPosition().getX() + 20, this.getPosition().getY() + -60,20,20);
		pContext.strokeRect(this.getPosition().getX() + 20, this.getPosition().getY() + -60,20,20);
		pContext.fillRect(this.getPosition().getX() + 40, this.getPosition().getY() + -60,20,20);
		pContext.strokeRect(this.getPosition().getX() + 40, this.getPosition().getY() + -60,20,20);
	};
	
	House.prototype.drawRightWindow = function(pContext){
		pContext.save();
		pContext.translate(120,0);
		this.drawWindowPane(pContext);
		pContext.restore();
		pContext.restore(); 
	};
	
	House.prototype.rotateHouse = function(pContext){
		pContext.save();		
		pContext.translate(300,200);
		pContext.rotate(this.getRotation());
		pContext.translate(-100,100);
		this.draw(pContext);
		pContext.restore();
	};
	
	House.prototype.update = function(){
		this.setRotation(this.getRotation() + 0.05);		
	};
	console.log("House made");
	return House;
})();