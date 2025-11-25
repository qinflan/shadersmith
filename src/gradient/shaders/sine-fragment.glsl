precision highp float;

uniform float uAmplitude;
uniform float uTime;
uniform vec4 uColors[5];
uniform float uGrain;

varying vec2 vUv;


void main () {
    vec2 uv = (vUv - 0.5) * 2.0;

    float d = -uTime * 0.4;
    float a = 0.0;

    for (float i = 0.0; i < 8.0; i++) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
    }

    d += uTime * 0.6;

    // shader is sensitive to amplitude so scale it down, bit hacky and need to be refactored
    float minimizedAmplitude = uAmplitude * 0.02;
    float val = cos(a * 0.3 + d * minimizedAmplitude);

    // normalize intensity
    float t = (val + 1.0) * 0.5;

    vec4 color; 

    if (t < 0.25) {
        float f = t / 0.25;
        color = mix(uColors[0], uColors[1], f);
    } else if (t < 0.5) {
        float f = (t - 0.25) / 0.25;
        color = mix(uColors[1], uColors[2], f);
    } else if (t < 0.75) {
        float f = (t - 0.5) / 0.25;
        color = mix(uColors[2], uColors[3], f);
    } else {
        float f = (t - 0.75) / 0.25;
        color = mix(uColors[3], uColors[4], f);
    }

    gl_FragColor = color;

}