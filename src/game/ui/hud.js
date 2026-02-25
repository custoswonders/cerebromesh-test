import { Container, Text } from 'pixi.js';
import { COLORS } from '../constants.js';

export function createHud() {
  const container = new Container();

  const scoreText = new Text({
    text: 'Score: 0',
    style: {
      fill: COLORS.ui,
      fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
      fontSize: 18,
      fontWeight: '600'
    }
  });

  const healthText = new Text({
    text: 'Health: 3',
    style: {
      fill: COLORS.ui,
      fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
      fontSize: 18,
      fontWeight: '600'
    }
  });

  const messageText = new Text({
    text: 'TODO: implement gameplay in src/game',
    style: {
      fill: COLORS.accent,
      fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
      fontSize: 16,
      fontWeight: '500'
    }
  });

  scoreText.position.set(20, 16);
  healthText.position.set(20, 40);
  messageText.position.set(20, 68);

  container.addChild(scoreText, healthText, messageText);

  return {
    container,
    update(state) {
      scoreText.text = `Score: ${state.score}`;
      healthText.text = `Health: ${state.health}`;
    },
    setMessage(message) {
      messageText.text = message;
    }
  };
}
