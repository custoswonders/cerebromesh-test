import { createCollectible } from '../entities/collectible.js';
import { createObstacle } from '../entities/obstacle.js';
import { randRange } from '../utils/rand.js';
import { GAME_CONFIG } from '../constants.js';

export function createSpawner(world, bounds) {
  let collectibleTimer = 0;
  let obstacleTimer = 0;

  return {
    update(dt, entities) {
      // TODO: Spawn collectibles and obstacles on timers.
      // Use bounds to choose spawn positions.
      // Push created entities into entities.collectibles / entities.obstacles.
      // Example helpers below are currently unused.

      collectibleTimer += dt;
      obstacleTimer += dt;

      void world;
      void entities;
    },
    getDebugTimers() {
      return { collectibleTimer, obstacleTimer };
    }
  };
}

export function createRandomCollectible(bounds) {
  return createCollectible({
    x: randRange(40, bounds.width - 40),
    y: randRange(40, bounds.height - 40)
  });
}

export function createRandomObstacle(bounds) {
  return createObstacle({
    x: randRange(40, bounds.width - 40),
    y: randRange(40, bounds.height - 40)
  });
}

export const SPAWN_DEFAULTS = {
  collectibleInterval: GAME_CONFIG.spawnInterval,
  obstacleInterval: GAME_CONFIG.obstacleInterval
};
