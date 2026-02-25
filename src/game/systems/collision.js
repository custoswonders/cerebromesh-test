import { distance } from '../utils/math.js';

export function resolveCollisions(entities, state, hud) {
  // TODO: Implement collision detection and responses.
  // - Player vs collectibles: increase score, remove collectible.
  // - Player vs obstacles: reduce health, remove obstacle.
  // - If health <= 0, set state.running = false and display message.

  void entities;
  void state;
  void hud;
}

export function isOverlapping(a, b) {
  return distance(a.view, b.view) <= a.radius + b.radius;
}
