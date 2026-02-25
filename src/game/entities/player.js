import { Graphics } from 'pixi.js';
import { COLORS, GAME_CONFIG } from '../constants.js';

export function createPlayer(position) {
  const view = new Graphics();
  view.circle(0, 0, GAME_CONFIG.playerRadius).fill(COLORS.player);
  view.x = position.x;
  view.y = position.y;

  return {
    view,
    radius: GAME_CONFIG.playerRadius,
    speed: GAME_CONFIG.playerSpeed,
    velocity: { x: 0, y: 0 }
  };
}
