import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { useControlContext } from '@/hooks/useControlContext'
import { hsvaToRgba } from '@uiw/color-convert'

type GradientCanvasProps = {
  mode: 'gradient' | 'sandbox'
}

export default function GradientCanvas({ mode }: GradientCanvasProps) {

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

    const color1 = (() => { const { r, g, b, a } = hsvaToRgba(hsva1); return [r/255, g/255, b/255, a] })()
    const color2 = (() => { const { r, g, b, a } = hsvaToRgba(hsva2); return [r/255, g/255, b/255, a] })()
    const color3 = (() => { const { r, g, b, a } = hsvaToRgba(hsva3); return [r/255, g/255, b/255, a] })()
    const color4 = (() => { const { r, g, b, a } = hsvaToRgba(hsva4); return [r/255, g/255, b/255, a] })()
    const color5 = (() => { const { r, g, b, a } = hsvaToRgba(hsva5); return [r/255, g/255, b/255, a] })()
    

    return (
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 15], fov: 45 }}>
            <Suspense fallback={null}> 
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                {mode === 'sandbox' && <gridHelper args={[100, 50, 0x888888, 0x444444]} />}

                <mesh>
                    <planeGeometry args={[50, 50, 300, 300]} />
                    <shaderMaterial
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={{
                        uAmplitude: { value: amplitude },
                        uAnimationSpeed: { value: animationSpeed },
                        uColor1: { value: color1 },
                        uColor2: { value: color2 },
                        uColor3: { value: color3 },
                        uColor4: { value: color4 },
                        uColor5: { value: color5 },
                        uGrain: { value: grain }
                        }}
                    />
                </mesh>
            {mode === 'sandbox' && <OrbitControls enablePan enableZoom enableRotate />}
            </Suspense>
        </Canvas>
  )
}