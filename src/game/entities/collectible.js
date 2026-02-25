import { Graphics } from 'pixi.js';
import { COLORS, GAME_CONFIG } from '../constants.js';

export function createCollectible(position) {
  const view = new Graphics();
  view.circle(0, 0, GAME_CONFIG.collectibleRadius).fill(COLORS.collectible);
  view.x = position.x;
  view.y = position.y;

  return {
    view,
    radius: GAME_CONFIG.collectibleRadius,
    velocity: { x: 0, y: 0 }
  };
}
