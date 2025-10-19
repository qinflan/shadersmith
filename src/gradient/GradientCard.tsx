import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useControlContext } from "@/hooks/useControlContext"
import GradientCanvas from "./GradientCanvas"

const GradientCard = () => {
    const { isSandboxMode, setIsSandboxMode } = useControlContext()

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
            <div className="w-full h-full">
              <GradientCanvas mode={isSandboxMode ? "sandbox" : "gradient"} />
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default GradientCard