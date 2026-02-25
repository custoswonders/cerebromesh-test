import { Application } from 'pixi.js';
import { Game } from './game/Game.js';

const app = new Application();
await app.init({
  backgroundColor: 0x0b0f1a,
  resizeTo: window,
  antialias: true,
  autoDensity: true,
  autoStart: false,
  resolution: window.devicePixelRatio || 1
});

const host = document.getElementById('app');
if (!host) {
  throw new Error('Missing #app container');
}

host.appendChild(app.canvas);

const game = new Game(app);
await game.init();

let lastTime = performance.now();
function frame(now) {
  const delta = ((now - lastTime) / 1000) * 60;
  lastTime = now;
  game.update(delta);
  app.render();
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
