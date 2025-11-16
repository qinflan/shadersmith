precision highp float;

uniform float uTime;
uniform float uMetalness;
uniform float uRoughness;
uniform vec3 uLightPos;
uniform vec3 uCameraPos;
uniform vec4 uColors[5];
uniform float uGrain;

varying float vHeight;

float fresnel(vec3 viewDir, vec3 normal, float bias, float scale, float power) {
  return bias + scale * pow(1.0 - dot(viewDir, normal), power);
}

float specularStrength(vec3 lightDir, vec3 viewDir, vec3 normal, float shininess) {
  vec3 halfDir = normalize(lightDir + viewDir);
  return pow(max(dot(normal, halfDir), 0.0), shininess);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec3 pos = vec3(gl_FragCoord.xy, vHeight);
  vec3 normal = normalize(cross(dFdx(pos), dFdy(pos)));

  vec3 lightDir = normalize(uLightPos);
  vec3 viewDir = normalize(uCameraPos - vec3(0.0, 0.0, vHeight));

  float shininess = mix(32.0, 64.0, 1.0 - uRoughness);
  float spec = specularStrength(lightDir, viewDir, normal, shininess);

  float t = smoothstep(-0.3, 0.3, vHeight);

  vec3 baseColor;
  if (t < 0.25) baseColor = mix(uColors[0].rgb, uColors[1].rgb, t * 4.0);
  else if (t < 0.5) baseColor = mix(uColors[1].rgb, uColors[2].rgb, (t - 0.25) * 4.0);
  else if (t < 0.75) baseColor = mix(uColors[2].rgb, uColors[3].rgb, (t - 0.5) * 4.0);
  else baseColor = mix(uColors[3].rgb, uColors[4].rgb, (t - 0.75) * 4.0);

  baseColor += 0.1 * sin(uTime + vHeight * 5.0);

  float metalness = clamp(uMetalness, 0.0, 1.0);
  float fres = fresnel(viewDir, normal, 0.02, 1.0, 5.0);

  float grain = noise(gl_FragCoord.xy * uGrain + uTime * 0.3) * 0.1;

  vec3 color = baseColor * (0.7 + 0.3 * fres) + spec * 1.5 + grain;
  color = mix(baseColor, color, metalness);

  gl_FragColor = vec4(color, 1.0);
}
