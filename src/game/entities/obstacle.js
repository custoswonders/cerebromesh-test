import { Graphics } from 'pixi.js';
import { COLORS, GAME_CONFIG } from '../constants.js';

export function createObstacle(position) {
  const view = new Graphics();
  view.roundRect(
    -GAME_CONFIG.obstacleRadius,
    -GAME_CONFIG.obstacleRadius,
    GAME_CONFIG.obstacleRadius * 2,
    GAME_CONFIG.obstacleRadius * 2,
    4
  ).fill(COLORS.obstacle);
  view.x = position.x;
  view.y = position.y;

  return {
    view,
    radius: GAME_CONFIG.obstacleRadius,
    velocity: { x: 0, y: 0 }
  };
}
