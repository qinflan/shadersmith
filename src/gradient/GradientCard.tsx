import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useControls } from "@/hooks/ControlStore"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { GradientScene } from "./GradientCanvas"

const GradientCard = () => {
    const { isSandboxMode, setIsSandboxMode } = useControls.getState()

  return (
    <div className="flex flex-col gap-4 items-center">
    <ButtonGroup>
      <Button 
        variant={isSandboxMode ? "outline" : "default"} 
        onClick={() => setIsSandboxMode(false)}
        >
          preview
        </Button>
      <Button 
        variant={isSandboxMode ? "default" : "outline"} 
        onClick={() => setIsSandboxMode(true)}
        >
          sandbox mode
        </Button>
    </ButtonGroup>

        <Card className="w-[50vw] h-full p-0 overflow-hidden">
          <CardContent className="w-full h-full p-0">
                    <Canvas className="w-full h-full" shadows camera={{ position: [0, 0, 50], fov: 30 }}>
                        <Suspense fallback={null}>
                            <GradientScene />
                        </Suspense>
                    </Canvas>
          </CardContent>
        </Card>
    </div>
  )
}

export default GradientCard