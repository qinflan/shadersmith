import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useControls } from "@/hooks/ControlStore"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { GradientScene } from "./GradientCanvas"

const GradientCard = () => {
    const { isSandboxMode, setIsSandboxMode } = useControls();

  return (
    <div className="relative w-full flex flex-col gap-4 items-center">
        <Card className="w-[50vw] max-w-[1000px] h-[485px] p-0 overflow-hidden">
          <CardContent className="w-full h-full p-0">
                    <Canvas className="w-full h-full" 
                      key={isSandboxMode ? "sandbox" : "preview"} 
                      camera={isSandboxMode ? { position: [-40, 20, 50], fov: 50 } : { position: [0, 25, 50], fov: 18 }}
                    >
                        <Suspense fallback={null}>
                            <GradientScene sandbox={isSandboxMode}/>
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
    </ButtonGroup>
    </div>
  )
}

export default GradientCard