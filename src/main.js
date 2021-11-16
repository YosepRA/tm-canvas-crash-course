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

  ctx.fillStyle = 'aquamarine';
  ctx.fillRect(10, 10, 180, 100);
}

ready(init);
