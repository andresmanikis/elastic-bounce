function Ball(elasticity) {
	this.h = 300;
	this.v = 0;
	this.a = -10;
	this.elasticity = elasticity;

	this.ballHandler = $('<div class="ball">' + this.elasticity + '</div>');
	$("#floor").append(this.ballHandler);

	this.offset = parseInt(this.ballHandler.css('height'));
}

Ball.prototype.draw = function() {
	this.ballHandler.css("top", -this.offset - this.h);
};

Ball.prototype.setHeight = function(height) {
	this.h = height;
};

Ball.prototype.update = function() {
	this.v += this.a / FPS;
	this.h += this.v;

	if (this.h <= 0) {
		this.v *= -this.elasticity;
		this.h = 0;
	}
};

Ball.prototype.reset = function() {
	this.h = 300;
	this.v = 0;
};