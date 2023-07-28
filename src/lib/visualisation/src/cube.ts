// Copyright 2023 Stichting Block Foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// Import the necessary modules from luma.gl
import {AnimationLoop, Model, Geometry, setParameters} from 'luma.gl';


// Create a new AnimationLoop, which handles the animation frame rendering
const animationLoop = new AnimationLoop({
  // This method is called once when the program starts. It's used to set up the WebGL context and create any objects that will be used in the rendering loop.
  onInitialize: ({gl}) => {
    // Set global WebGL settings
    setParameters(gl, {
      // Set the color to clear the screen to
      clearColor: [0, 0, 0, 1],
      // Set the depth value to clear the depth buffer to
      clearDepth: [1],
      // Enable depth testing
      depthTest: true,
      // Set the depth comparison function
      depthFunc: gl.LEQUAL
    });

    // Return an object containing any data that will be used in the rendering loop
    return {
      // Create a new Model object, which represents a 3D object that can be drawn
      cube: new Model(gl, {
        // The Geometry object represents the shape of the model
        geometry: new Geometry({
          // The drawMode specifies how to interpret the vertex data. 'TRIANGLES' means each set of three vertices forms a triangle.
          drawMode: 'TRIANGLES',
          attributes: {
            // The positions array contains the x, y, z coordinates for each vertex of the model
            positions: new Float32Array([
              // Front face
              -1.0, -1.0,  1.0,
               1.0, -1.0,  1.0,
               1.0,  1.0,  1.0,
              -1.0,  1.0,  1.0,
            ]),
            // The indices array specifies which vertices form each face of the model
            indices: new Uint16Array([0, 1, 2, 0, 2, 3])
          }
        }),
        // The vertex shader program, written in GLSL
        vs: `
          attribute vec3 positions;
          uniform mat4 uPMatrix;
          uniform mat4 uMVMatrix;
          void main(void) {
            gl_Position = uPMatrix * uMVMatrix * vec4(positions, 1.0);
          }
        `,
        // The fragment shader program, written in GLSL
        fs: `
          void main(void) {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
          }
        `,
        // Uniforms are global GLSL variables. These are set on the JavaScript side and passed to the GLSL programs.
        uniforms: {
          // The projection matrix
          uPMatrix: () => animationLoop.projection,
          // The model-view matrix
          uMVMatrix: () => animationLoop.camera.viewMatrix
        }
      })
    };
  },
  // This method is called once per frame. It's used to draw the scene.
  onRender: ({gl, cube, tick}) => {
    // Clear the screen and the depth buffer
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // Draw the cube
    cube.setUniforms({uTime: tick * 0.01}).draw();
  }
});

// Start the animation loop
animationLoop.start();
