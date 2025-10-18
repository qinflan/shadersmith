import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const GradientCanvas = () => {
  return (

    <Tabs defaultValue="gradient" className="flex flex-col items-center w-[50vw]">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="gradient">preview</TabsTrigger>
        <TabsTrigger value="sandbox">sandbox mode</TabsTrigger>
      </TabsList>

      <TabsContent value="gradient" className="flex justify-center">
        <Card className="w-[50vw]">
          <CardContent className="p-0">
            <div className="h-96 w-full" />
            {/* render 3d scenes here */}
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