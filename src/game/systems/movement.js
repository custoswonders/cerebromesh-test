import { clamp } from '../utils/math.js';

export function updatePlayerMovement(player, input, dt, bounds) {
  // TODO: Implement player movement using input + dt.
  // Suggested keys: Arrow keys or WASD.
  // Clamp the player inside bounds.

  void player;
  void input;
  void dt;
  void bounds;
}

export function clampToBounds(player, bounds) {
  player.view.x = clamp(player.view.x, player.radius, bounds.width - player.radius);
  player.view.y = clamp(player.view.y, player.radius, bounds.height - player.radius);
}
