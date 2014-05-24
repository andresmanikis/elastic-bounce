const FPS = 60;

function SimulationManager() {
	this.balls = [new Ball(1.1), new Ball(0.7), new Ball(1.0), new Ball(0.8), new Ball(0.9)];
	this.running = false;
	this.interval = null;
}

SimulationManager.prototype.run = function() {
	this.start();
};

SimulationManager.prototype.start = function() {
	var self = this;
	this.running = true;
	
	this.interval = setInterval(function() {
		for (var i = self.balls.length - 1; i >= 0; i--) {
			self.balls[i].update();
			self.balls[i].draw();
		}
	}, 1000 / FPS);
};

SimulationManager.prototype.reset = function() {
	for (var i = this.balls.length - 1; i >= 0; i--) {
		this.balls[i].reset();
	}

	if (!this.running) { this.start() };
};

SimulationManager.prototype.stop = function() {
	clearInterval(this.interval);
	this.running = false;
};