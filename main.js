canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
background_image = "parkingLot.jpg";
car_image = "car2.png";
car_x = 5;
car_y = 300;
car_width = 75;
car_height = 100;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = UploadBackground;
	background_imgTag.src = background_image;

	car_imgTag = new Image();
	car_imgTag.onload = UploadCar;
	car_imgTag.src = car_image;
}

function UploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function UploadCar() {
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(keyPressed == "38") {
		up();
		console.log("up");
	}

	if(keyPressed == "40") {
		down();
		console.log("down");
	}

	if(keyPressed == "39") {
		right();
		console.log("right");
	}

	if(keyPressed == "37") {
		left();
		console.log("left");
	}

}

function up() {
	if(car_y >=0) {
		car_y = car_y -  10;
		console.log("When up  be pressed, x = " + car_x + "y = " + car_y); 
		UploadBackground();
		UploadCar();

		if((car_y > 110) && (car_y <210) && (car_x > 405) && (car_x < 455)) {
			document.getElementById("heading").innerHTML = "You Win";
		}
	}


}

function down() {
	if(car_y <=600) {
		car_y = car_y+10;
		UploadBackground();
		UploadCar();
		console.log("When down  be pressed, x = " + car_x + "y = " + car_y);
	}
}

function left() {
	if (car_x >=0) {
		car_x = car_x-10;
		UploadBackground();
		UploadCar();
		console.log("When left be pressed, x = " + car_x + "y = " + car_y);
	}
}

function right() {
	if(car_x <=800) {
		car_x = car_x+10;
		UploadBackground();
		UploadCar();
		console.log("When right  be pressed, x = " + car_x + "y = " + car_y);
	}
}