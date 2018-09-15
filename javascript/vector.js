// The definition of the vector object.
// Takes two parameters: the x and y coordinates
var Vector = (function() {

	function Vector(pX, pY){
		this.setX(pX);
		this.setY(pY);
	};
	Vector.prototype.getX = function(){
		return this.mX;
	};
	Vector.prototype.setX = function(pX){
		//console.log("Setting mX");
		this.mX = pX;
		//console.log("mX is " + this.mX);
	};
	Vector.prototype.getY = function(){
		return this.mY;
	};
	Vector.prototype.setY = function(pY){
		//console.log("Setting y");
		this.mY = pY;
		//console.log("mY is " + this.mY);
	};
	return Vector;
})();