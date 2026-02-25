export function createInput(target = window) {
  const pressed = new Set();

  function onKeyDown(event) {
    pressed.add(event.code);
  }

  function onKeyUp(event) {
    pressed.delete(event.code);
  }

  target.addEventListener('keydown', onKeyDown);
  target.addEventListener('keyup', onKeyUp);

  return {
    isDown(code) {
      return pressed.has(code);
    },
    destroy() {
      target.removeEventListener('keydown', onKeyDown);
      target.removeEventListener('keyup', onKeyUp);
    }
  };
}
