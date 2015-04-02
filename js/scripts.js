var FPS = 60;
var interval = null;
var balls = null;
var running = false;

$(function() {
	var manager = new SimulationManager();
	manager.run();

	$("#reset-button").click(function() {
		manager.reset();
	});

	$("#stop-button").click(function() {
		manager.stop();
	});
});