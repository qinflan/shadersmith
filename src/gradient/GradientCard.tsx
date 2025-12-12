import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useControls } from "@/hooks/ControlStore"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { GradientScene } from "./GradientCanvas"
import { GoScreenFull } from "react-icons/go";

interface FullscreenElement extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void> | void;
  msRequestFullscreen?: () => Promise<void> | void;
}

const GradientCard = () => {
  const { isSandboxMode, setIsSandboxMode } = useControls();

  const cardRef = useRef<FullscreenElement>(null);

  // make fullscreen request on google, safari, firefox based on DOM element
  const toggleFullscreen = () => {
    const el = cardRef.current;
    if (!el) return;
    el.requestFullscreen?.()
    el.webkitRequestFullscreen?.()
    el.msRequestFullscreen?.()
  }

  return (
    <div className="relative flex flex-col gap-4 items-center">
      <Card ref={cardRef} className=
          "w-[100%] md:w-[50vw] max-w-[1000px] h-[485px] p-0 overflow-hidden"
      >
        <CardContent className="w-full h-full p-0">
          <Canvas className="w-full h-full"
            key={isSandboxMode ? "sandbox" : "preview"}
            camera={isSandboxMode ? { position: [-40, 20, 50], fov: 50 } : { position: [0, 25, 50], fov: 18 }}
          >
            <Suspense fallback={null}>
              <GradientScene sandbox={isSandboxMode} />
            </Suspense>
          </Canvas>
        </CardContent>
      </Card>
      <ButtonGroup>
        <Button
          variant={isSandboxMode ? "outline" : "default"}
          onClick={() => setIsSandboxMode(false)}
          className="cursor-pointer"
        >
          preview
        </Button>
        <Button
          variant={isSandboxMode ? "default" : "outline"}
          onClick={() => setIsSandboxMode(true)}
          className="cursor-pointer"
        >
          sandbox
        </Button>
        <Button
          variant="outline"
          onClick={() => toggleFullscreen()}
          className="cursor-pointer"
        >
          <GoScreenFull />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default GradientCard