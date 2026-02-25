import { Container, Graphics, Text } from 'pixi.js';
import { createPlayer } from './entities/player.js';
import { createInput } from './systems/input.js';
import { createSpawner } from './systems/spawn.js';
import { resolveCollisions } from './systems/collision.js';
import { updatePlayerMovement, clampToBounds } from './systems/movement.js';
import { createHud } from './ui/hud.js';
import { GAME_CONFIG, COLORS } from './constants.js';

export class Game {
  constructor(app) {
    this.app = app;
    this.world = new Container();
    this.entities = {
      player: null,
      collectibles: [],
      obstacles: []
    };
    this.state = {
      score: 0,
      health: GAME_CONFIG.maxHealth,
      running: true
    };

    this.bounds = {
      width: 0,
      height: 0
    };

    this.input = createInput(window);
    this.hud = createHud();
    this.spawner = null;

    this.update = this.update.bind(this);
  }

  async init() {
    this.bounds.width = this.app.screen.width;
    this.bounds.height = this.app.screen.height;

    const background = new Graphics();
    background.rect(0, 0, this.bounds.width, this.bounds.height).fill(0x0b0f1a);

    const title = new Text({
      text: 'PIXEL DRIFT — Candidate Test',
      style: {
        fill: COLORS.ui,
        fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
        fontSize: 20,
        fontWeight: '700'
      }
    });
    title.position.set(20, this.bounds.height - 40);

    this.entities.player = createPlayer({
      x: this.bounds.width / 2,
      y: this.bounds.height / 2
    });

    this.world.addChild(background, this.entities.player.view, title);

    this.app.stage.addChild(this.world, this.hud.container);

    this.spawner = createSpawner(this.world, this.bounds);

    this.app.renderer.on('resize', (width, height) => {
      this.bounds.width = width;
      this.bounds.height = height;
      background.clear();
      background.rect(0, 0, width, height).fill(0x0b0f1a);
      title.position.set(20, height - 40);
      if (this.entities.player) {
        clampToBounds(this.entities.player, this.bounds);
      }
    });
  }

  start() {
    this.app.ticker.add(this.update);
  }

  update(delta) {
    const dt = delta / 60;

    if (this.state.running) {
      updatePlayerMovement(this.entities.player, this.input, dt, this.bounds);
      this.spawner.update(dt, this.entities);
      resolveCollisions(this.entities, this.state, this.hud);
    }

    this.hud.update(this.state);
  }
}
