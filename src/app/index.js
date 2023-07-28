import {AnimationLoop} from '@luma.gl/engine';
import {clear} from '@luma.gl/webgl';

const loop = new AnimationLoop({
  onInitialize({gl}) {
    // Setup logic goes here
  },

  onRender({gl}) {
    // Drawing logic goes here
    clear(gl, {color: [0, 0, 0, 1]});
  }
});

loop.start();