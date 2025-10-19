uniform vec4 uColor1;
uniform vec4 uColor2;
uniform vec4 uColor3;
uniform vec4 uColor4;
uniform vec4 uColor5;
uniform float uGrain;

void main() {
    float t = gl_FragCoord.y / 500.0; 

    vec4 color;
    if (t < 0.25) {
        float f = t / 0.25;
        color = mix(uColor1, uColor2, f);
    } else if (t < 0.5) {
        float f = (t - 0.25) / 0.25;
        color = mix(uColor2, uColor3, f);
    } else if (t < 0.75) {
        float f = (t - 0.5) / 0.25;
        color = mix(uColor3, uColor4, f);
    } else {
        float f = (t - 0.75) / 0.25;
        color = mix(uColor4, uColor5, f);
    }

    gl_FragColor = color;
}
