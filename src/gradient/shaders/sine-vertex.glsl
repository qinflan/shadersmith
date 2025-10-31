uniform float uTime;
uniform float uAmplitude;
uniform float uAnimationSpeed;
varying float vHeight;

float sinenoise(vec4 x, vec2 uv, float uAmplitude, float uAnimationSpeed) {
  float n = 2.0; // number of iterations for ridge creation loop
  float a = 0.0;
  float d = -uTime * uAnimationSpeed;

  // create offset phase for looping
  float r = length(uv) * 0.3 * uAmplitude;
  float phase = (position.x * 0.2 + position.y * 0.3) + r * 0.3;

  // loop angle creation to generate uniquely twisting ridges 
  for (float i = 0.0; i < n; i++) {
      a += cos(float(i) - d - a * position.x * 0.3 + phase);
      d += sin(float(i) * 0.5 + phase);
  }

  // calculate displacement based on amplitude uniform
  float displacement = cos(d + a) * uAmplitude;

  return displacement;
}

void main() {
    vec2 uv = position.xy;

    // dial the amplitude down to keep it calm
    float displacement = sinenoise(vec4(position, uTime), uv, (uAmplitude * 0.05), uAnimationSpeed);

    vec3 newPosition = position;
    newPosition.z += displacement;
    vHeight = displacement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}