import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import type { OrbitControlsProps } from '@react-three/drei'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { useControls } from '@/hooks/ControlStore'
import { hsvaToRgba } from '@uiw/color-convert'
import * as THREE from 'three'

function GradientMesh() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const materialRef = useRef<THREE.ShaderMaterial>(null!);

    const colorVectors = useRef<THREE.Vector4[]>([
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
        new THREE.Vector4(),
    ]);

    // this will updates shaders based on changes to our material ref
    useFrame(( state ) => {
        const {
            amplitude,
            animationSpeed,
            grain,
            hsva1,
            hsva2,
            hsva3,
            hsva4,
            hsva5,
        } = useControls.getState()

        const mat = materialRef.current
        if (!mat) return
 
        mat.uniforms.uTime.value = state.clock.elapsedTime;

        mat.uniforms.uAmplitude.value = amplitude
        mat.uniforms.uAnimationSpeed.value = animationSpeed
        mat.uniforms.uGrain.value = grain

        const hsvas = [hsva1, hsva2, hsva3, hsva4, hsva5];

        // convert hsva from pickers to rgba for shaders, divide by 255 to get float
        hsvas.forEach((hsva, i) => {
            const { r, g, b, a } = hsvaToRgba(hsva);
            colorVectors.current[i].set(r / 255, g / 255, b / 255, a);
            mat.uniforms.uColors.value[i] = colorVectors.current[i];
        })
    })

    // return 3D gradient mesh
    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[50, 50, 300, 300]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uAmplitude: { value: useControls.getState().amplitude },
                    uAnimationSpeed: { value: useControls.getState().animationSpeed },
                    uColors: { value: colorVectors.current },
                    uGrain: { value: useControls.getState().grain }
                }}
            />
        </mesh>
    )
}

export function GradientScene({ sandbox }: {sandbox: boolean}) {
    const orbitRef = useRef<OrbitControlsProps>(null)
    const gridRef = useRef<THREE.GridHelper>(null!)

    useFrame(() => {
        const isSandbox = useControls.getState().isSandboxMode

        if (orbitRef.current) {
        orbitRef.current.enabled = isSandbox
        }
        if (gridRef.current) {
        gridRef.current.visible = isSandbox
        }
    })

    return (
        <>
            <ambientLight intensity={10} />
            <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow shadow-mapSize={[2048, 2048]} />
            <GradientMesh />
            <OrbitControls enabled={sandbox}/>
            <gridHelper args={[400, 10, 0xaaaaaa, 0xbbbbbb]} visible={sandbox} />
        </>
    )
}
