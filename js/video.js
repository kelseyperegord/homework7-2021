
var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// Play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play();
});

// Pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	var text = document.querySelector('#mute').innerHTML
	if (text == "Mute") {
		console.log("Mute Video")
		video.muted = true
		document.querySelector('#mute').innerHTML = "Unmute"
	}
	else {
		console.log("Unmute Video")
		video.muted = false
		document.querySelector('#mute').innerHTML = "Mute"
	}
});

// Old School Styling
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Add Old School Styling")
	document.querySelector('#player1').classList.add("oldSchool")
});

// Revert to Original Styling
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School Styling")
	document.querySelector('#player1').classList.remove('oldSchool')
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead 15 seconds")

	if ((video.currentTime + 15) > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime = video.currentTime + 15
	}

	console.log(video.currentTime)
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95
	console.log(video.playbackRate)
});

// Speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05
	console.log(video.playbackRate)
});

// Volume
// Change the volume based on the slider and update the volume information.
document.querySelector('#slider').addEventListener("change", function() {
	document.querySelector('#volume').innerHTML = document.querySelector('#slider').value + "%"
});
