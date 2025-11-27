# Shadersmith Fluid 3D Gradient Generator

This project allows users to create procedurally generated fluid 3D gradient art using react-three-fiber and custom GLSL shaders.

Currently there are three supported presets:
  - Valley mode (utilizes a simplex noise algorithm to create a lava lamp effect)
  - Liquid mode (utilizes sin/cos functions to create procedural, curvy ripples that resemble liquid)
  - Gloss (Also uses sin/cos functions but in fragment shader, with no vertex deformatin).

Currently I am working on an npm package that will make it possible to customize the gradient art in the react web app, which will generate a code block that can be used in you React web application for background art. This is in progress.

You can modify various aspects of the art itself, including amplitude of the effects, animation speed, and grain. You can also pick custom colors using a color swatch. These colors will be converted from HSVA to RGBA for the shaders. 

Once the npm package is published, you will also be able to pass in custom RGBA values to pick more specific color codes.
