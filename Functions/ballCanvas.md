
var frictionX = 0.5;
var frictionY = 0.9;
var gravity = 1;
var numberOfBalls = 300;


var circleArray;

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.lineWidth = 0.1;
    c.stroke();
    c.fill();
  }
  this.fall = function () {
    if (this.y + this.radius + this.dy >= canvas.height) {
      this.dy = -this.dy * frictionY;
    } else {
      this.dy += gravity;
    }
    if (this.x + this.radius + this.dx >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx * frictionX;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

var circle;

function init() {
  circleArray = [];
  for (var i = 0; i < numberOfBalls; i++) {
    var radius = (Math.random() * 20) + 20;
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() * 4) + 1;
    var color = randomColor();
    circle = new Circle(x, y, dx, dy, radius, color);
    circleArray.push(circle);
  }
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].fall();
  }

}
