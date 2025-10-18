import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useControlContext } from "@/hooks/useControlContext"

const GradientCanvas = () => {
    const {
        amplitude,
        animationSpeed,
        grain,
        hsva1,
        hsva2,
        hsva3,
        hsva4,
        hsva5,
    } = useControlContext()

  return (

    <Tabs defaultValue="gradient" className="flex flex-col items-center w-[50vw]">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="gradient">preview</TabsTrigger>
        <TabsTrigger value="sandbox">sandbox mode</TabsTrigger>
      </TabsList>

      <TabsContent value="gradient" className="flex justify-center">
        <Card className="w-[50vw]">
          <CardContent className="p-0">
            <div className="h-96 w-full">
              {/* render 3d scenes here */}
              <p>Amplitude: {amplitude[0]}</p>
              <p>Animation Speed: {animationSpeed[0]}</p>
              <p>Grain: {grain[0]}</p>
              <p>Color1: {`h:${hsva1.h} s:${hsva1.s} v:${hsva1.v} a:${hsva1.a}`}</p>
              <p>Color2: {`h:${hsva2.h} s:${hsva2.s} v:${hsva2.v} a:${hsva2.a}`}</p>
              <p>Color3: {`h:${hsva3.h} s:${hsva3.s} v:${hsva3.v} a:${hsva3.a}`}</p>
              <p>Color4: {`h:${hsva4.h} s:${hsva4.s} v:${hsva4.v} a:${hsva4.a}`}</p>
              <p>Color5: {`h:${hsva5.h} s:${hsva5.s} v:${hsva5.v} a:${hsva5.a}`}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="sandbox" className="flex justify-center">
        <Card className="w-[50vw]">
          <CardContent className="p-0">
            <div className="h-96 w-full" />
            {/* render sandbox here */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default GradientCanvas