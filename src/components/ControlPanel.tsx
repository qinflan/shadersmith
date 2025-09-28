import { useState, Fragment } from "react";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex } from '@uiw/color-convert';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

const ControlPanel = () => {

    const [animationSpeed, setAnimationSpeed] = useState<number[]>([50]);
    const [animationDuration, setAnimationDuration] = useState<number[]>([50]);
    const [grain, setGrain] = useState<number[]>([50]);
    const [hsva1, setHsva1] = useState({ h: 186, s: 43, v: 100, a: 1 });
    const [hsva2, setHsva2] = useState({ h: 319, s: 21, v: 100, a: 1 });
    const [hsva3, setHsva3] = useState({ h: 198, s: 100, v: 93, a: 1 });
    const [hsva4, setHsva4] = useState({ h: 224, s: 46, v: 55, a: 1 });
    const [hsva5, setHsva5] = useState({ h: 40, s: 13, v: 100, a: 1 });

    return (
        <div className="w-full h-full pt-10">

            <div className="relative flex flex-col w-fit rounded-3xl bg-card/50 backdrop-blur-md p-4 border-border/80 border-2">

                <div className="text-[10px] w-full">
                    <h1 className="text-center font-['helvetica-neue-lt-pro'] tracking-tight text-foreground">parameters</h1>
                </div>

                <div className="flex flex-col gap-6 mt-20 items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center">
                            <Select>
                                <SelectTrigger className="w-[180px] font-['helvetica-neue-lt-pro'] text-[14px] text-primary mb-2 tracking-wide font-normal">
                                    <SelectValue placeholder="resolution" />
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

                    <div className="flex flex-col justify-center items-center mt-4">
                        <p className="font-['helvetica-neue-lt-pro'] text-sm text-primary mb-2 tracking-wide">customize colors</p>

                        <div className="flex justify-center items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-md">
                                    <div className="rounded-md border-border border-1" style={{ width: 25, height: 25, background: hsvaToHex(hsva1) }}></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>color #1</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Fragment>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <Wheel width={150} height={150} color={hsva1} onChange={(color) => setHsva1({ ...hsva1, ...color.hsva })} />
                                            <ShadeSlider
                                                hsva={hsva1}
                                                style={{ width: 210, marginTop: 20 }}
                                                onChange={(newShade) => {
                                                    setHsva1({ ...hsva1, ...newShade });
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-md">
                                    <div className="rounded-md border-border border-1" style={{ width: 25, height: 25, background: hsvaToHex(hsva2) }}></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>color #2</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Fragment>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <Wheel width={150} height={150} color={hsva2} onChange={(color) => setHsva2({ ...hsva2, ...color.hsva })} />
                                            <ShadeSlider
                                                hsva={hsva2}
                                                style={{ width: 210, marginTop: 20 }}
                                                onChange={(newShade) => {
                                                    setHsva2({ ...hsva2, ...newShade });
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-md">
                                    <div className="rounded-md border-border border-1" style={{ width: 25, height: 25, background: hsvaToHex(hsva3) }}></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>color #3</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Fragment>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <Wheel width={150} height={150} color={hsva3} onChange={(color) => setHsva3({ ...hsva3, ...color.hsva })} />
                                            <ShadeSlider
                                                hsva={hsva3}
                                                style={{ width: 210, marginTop: 20 }}
                                                onChange={(newShade) => {
                                                    setHsva3({ ...hsva3, ...newShade });
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-md">
                                    <div className="rounded-md border-border border-1" style={{ width: 25, height: 25, background: hsvaToHex(hsva4) }}></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>color #4</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Fragment>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <Wheel width={150} height={150} color={hsva4} onChange={(color) => setHsva4({ ...hsva4, ...color.hsva })} />
                                            <ShadeSlider
                                                hsva={hsva4}
                                                style={{ width: 210, marginTop: 20 }}
                                                onChange={(newShade) => {
                                                    setHsva4({ ...hsva4, ...newShade });
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-md">
                                    <div className="rounded-md border-border border-1" style={{ width: 25, height: 25, background: hsvaToHex(hsva5) }}></div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>color #5</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Fragment>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <Wheel width={150} height={150} color={hsva5} onChange={(color) => setHsva5({ ...hsva5, ...color.hsva })} />
                                            <ShadeSlider
                                                hsva={hsva5}
                                                style={{ width: 210, marginTop: 20 }}
                                                onChange={(newShade) => {
                                                    setHsva5({ ...hsva5, ...newShade });
                                                }}
                                            />
                                        </div>
                                    </Fragment>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                    </div>

                    <RadioGroup defaultValue="option-one" className="flex gap-6 items-center justify-center mt-4">
                        <div className="flex flex-col items-center gap-2">
                            <Label htmlFor="option-one">preset #1</Label>
                            <RadioGroupItem value="option-one" id="option-one" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Label htmlFor="option-two">preset #2</Label>
                            <RadioGroupItem value="option-two" id="option-two" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Label htmlFor="option-three">preset #3</Label>
                            <RadioGroupItem value="option-three" id="option-three" />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Label htmlFor="option-four">preset #4</Label>
                            <RadioGroupItem value="option-four" id="option-four" />
                        </div>
                    </RadioGroup>

                    <Button variant="outline" className="mt-4 mb-2 w-[350px]">Export Art</Button>

                </div>
            </div>
        </div>
    )
}

export default ControlPanel