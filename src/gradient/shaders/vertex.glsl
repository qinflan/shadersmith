uniform float uTime;
uniform float uAmplitude;
uniform float uAnimationSpeed;

void main() {
    vec3 pos = position;
    pos.z += sin(pos.x * 0.1 + uTime * uAnimationSpeed) * uAmplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
