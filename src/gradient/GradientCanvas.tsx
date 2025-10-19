import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { useControlContext } from '@/hooks/useControlContext'
import { hsvaToRgba } from '@uiw/color-convert'
import * as THREE from 'three'

type GradientCanvasProps = {
    mode: 'gradient' | 'sandbox'
}

function GradientMesh() {
    // get control params from context
    const {
        amplitude,
        animationSpeed,
        grain,
        hsva1,
        hsva2,
        hsva3,
        hsva4,
        hsva5
    } = useControlContext()

    // refs
    const materialRef = useRef<THREE.ShaderMaterial>(null!);
    const colorVectors = useRef([
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4()
    ]);

    // this will updates shaders based on changes to our material ref
    useFrame(() => {
        if (!materialRef.current) return

        materialRef.current.uniforms.uAmplitude.value = amplitude
        materialRef.current.uniforms.uAnimationSpeed.value = animationSpeed
        materialRef.current.uniforms.uGrain.value = grain

        const hsvas = [hsva1, hsva2, hsva3, hsva4, hsva5];

        // convert hsva from pickers to rgba for shaders, divide by 255 to get float
        hsvas.forEach((hsva, i) => {
            const { r, g, b, a } = hsvaToRgba(hsva);
            colorVectors.current[i].set(r / 255, g / 255, b / 255, a);
            materialRef.current.uniforms.uColors.value[i] = colorVectors.current[i];
        })
    })

    // return 3D gradient mesh
    return (
        <mesh>
            <planeGeometry args={[50, 50, 300, 300]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uAmplitude: { value: amplitude },
                    uAnimationSpeed: { value: animationSpeed },
                    uColors: { value: colorVectors },
                    uGrain: { value: grain }
                }}
            />
        </mesh>
    )
}

export default function GradientCanvas({ mode }: GradientCanvasProps) {

    return (
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 15], fov: 45 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />

                {/* on sandbox mode toggle orbit controls and render gridlines */}
                {mode === 'sandbox' && <gridHelper args={[100, 50, 0x888888, 0x444444]} />}
                {mode === 'sandbox' && <OrbitControls enablePan enableZoom enableRotate />}

                <GradientMesh />
            </Suspense>
        </Canvas>
    )
}