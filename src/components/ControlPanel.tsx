import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ControlPanel = () => {

    const [animationSpeed, setAnimationSpeed] = useState<number[]>([50]);
    const [animationDuration, setAnimationDuration] = useState<number[]>([50]);
    const [grain, setGrain] = useState<number[]>([50]);

    return (
        <div className="w-full h-full pt-10">

            <div className="relative flex flex-col max-w-2xl h-[500px] rounded-3xl bg-card/50 backdrop-blur-md p-4 border-border/80 border-2">

                <div className="text-[10px] w-full">
                    <h1 className="text-center font-['helvetica-neue-lt-pro'] tracking-tight text-primary">parameters</h1>
                </div>



                <div className="flex flex-col gap-6 mt-20">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <Select>
                            <SelectTrigger className="w-[180px] font-['helvetica-neue-lt-pro'] text-[14px] text-primary mb-2 tracking-wide font-normal">
                                <SelectValue placeholder="resolution"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">1920 x 1080</SelectItem>
                                <SelectItem value="dark">1080 x 1920</SelectItem>
                                <SelectItem value="system">2560 x 1080</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>           
                        
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-['helvetica-neue-lt-pro'] text-sm text-primary mb-2 tracking-wide">animation speed</p>
                        <Slider 
                            value={animationSpeed}
                            onValueChange={setAnimationSpeed}
                            step={1}
                            className="w-[350px]"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-['helvetica-neue-lt-pro'] text-sm text-primary mb-2 tracking-wide">animation duration</p>
                        <Slider 
                            value={animationDuration}
                            onValueChange={setAnimationDuration}
                            step={1}
                            className="w-[350px]"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-['helvetica-neue-lt-pro'] text-sm text-primary mb-2 tracking-wide">grain</p>
                        <Slider 
                            value={grain}
                            onValueChange={setGrain}
                            step={1}
                            className="w-[350px]"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ControlPanel