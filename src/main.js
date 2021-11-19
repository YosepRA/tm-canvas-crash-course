import '../style.css';

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function init() {
  const canvas = document.querySelector('.canvas');
  /** @type {CanvasRenderingContext2D} */
  const ctx = canvas.getContext('2d');

  /* ========== Filla Playground ========== */

  // ctx.fillStyle = 'aquamarine';
  // ctx.fillRect(10, 10, 180, 100);

  // // Logo

  // ctx.beginPath();
  // ctx.moveTo(10, 120);
  // ctx.lineTo(110, 120);
  // ctx.lineTo(110, 300);
  // ctx.lineTo(10, 200);
  // ctx.closePath();
  // ctx.strokeStyle = 'hotpink';
  // ctx.lineWidth = '3';
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.moveTo(15, 125);
  // ctx.lineTo(105, 125);
  // ctx.lineTo(105, 285);
  // ctx.lineTo(15, 195);
  // ctx.closePath();
  // ctx.fillStyle = 'hotpink';
  // ctx.fill();

  // // Name

  // ctx.fillStyle = '#3e3e3e';
  // ctx.font = '2rem Quicksand';
  // ctx.fillText('Filla', 120, 152);
  // ctx.fillText('Playground', 120, 190);

  /* ========== Smile face ========== */

  // const centerX = canvas.width / 2;
  // const centerY = canvas.height / 2;

  // // Head.
  // ctx.arc(centerX, centerY, 160, 0, Math.PI * 2);

  // // Lip.
  // ctx.moveTo(centerX + 100, centerY);
  // ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

  // // Left eye.
  // ctx.moveTo(centerX - 40, centerY - 60);
  // ctx.arc(centerX - 60, centerY - 60, 20, 0, Math.PI * 2);

  // // Right eye.
  // ctx.moveTo(centerX + 80, centerY - 60);
  // ctx.arc(centerX + 60, centerY - 60, 20, 0, Math.PI * 2);

  // ctx.lineWidth = '2';
  // ctx.stroke();

  /* ========== Animation 1 - Bouncing Ball ========== */

  // ===== My Solution. =====

  // const state = {
  //   directionX: 1,
  //   directionY: 1,
  //   circle: {
  //     x: 100,
  //     y: 100,
  //     radius: 20,
  //     dx: 8,
  //     dy: 6,
  //   },
  // };
  // let {
  //   directionX,
  //   directionY,
  //   circle: { x, y, radius, dx, dy },
  // } = state;

  // const drawCircle = () => {
  //   ctx.beginPath();
  //   ctx.arc(x, y, radius, 0, Math.PI * 2);
  //   ctx.fillStyle = 'aqua';
  //   ctx.fill();
  // };

  // function update(timestamp) {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   drawCircle();

  //   if (directionX === 1) {
  //     x += dx;
  //   } else {
  //     x -= dx;
  //   }

  //   if (directionY === 1) {
  //     y += dy;
  //   } else {
  //     y -= dy;
  //   }

  //   // Collision detection.
  //   if (directionX === 1 && x + radius > canvas.width) {
  //     directionX = -1;
  //   } else if (directionX === -1 && x - radius < 0) {
  //     directionX = 1;
  //   }

  //   if (y + radius > canvas.height) {
  //     directionY = -1;
  //   } else if (directionY === -1 && y - radius < 0) {
  //     directionY = 1;
  //   }

  //   requestAnimationFrame(update);
  // }

  // ===== Course solution. =====

  const circle = {
    x: 100,
    y: 100,
    radius: 20,
    dx: 5,
    dy: 4,
  };

  const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'aqua';
    ctx.fill();
  };

  function update() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    drawCircle();

    circle.x += circle.dx;
    circle.y += circle.dy;

    // Collision detection.
    if (
      circle.x + circle.radius > canvas.width ||
      circle.x - circle.radius < 0
    ) {
      circle.dx *= -1;
    }

    if (
      circle.y + circle.radius > canvas.height ||
      circle.y - circle.radius < 0
    ) {
      circle.dy *= -1;
    }

    requestAnimationFrame(update);
  }

  update();
}

ready(init);
