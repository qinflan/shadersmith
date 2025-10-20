uniform vec4 uColors[5]; // array of colors
uniform float uGrain;

varying float vHeight; // passed z displacement for vertices from vertex shader

void main() {
    float t = (vHeight + 10.0) / 20.0;
    t = clamp(t, 0.0, 1.0);
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
