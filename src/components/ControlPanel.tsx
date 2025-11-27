import { Fragment } from "react";
// import { useControlContext } from "@/hooks/useControlContext";
import { useControls } from "@/hooks/ControlStore";
import { Slider } from "@/components/ui/slider";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex } from '@uiw/color-convert';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

const ControlPanel = () => {
    const {
        amplitude,
        setAmplitude,
        animationSpeed,
        setAnimationSpeed,
        grain,
        setGrain,
        preset,
        setPreset,
        hsva1,
        setHsva1,
        hsva2,
        setHsva2,
        hsva3,
        setHsva3,
        hsva4,
        setHsva4,
        hsva5,
        setHsva5
    } = useControls();

    return (
        <Card className="min-w-[275px] max-h-[485px]">
            <CardHeader className="text-left">
                <CardTitle className="font-['helvetica-neue-lt-pro'] text-2xl font-normal tracking-tight">parameters</CardTitle>
                <CardDescription className="font-['helvetica-neue-lt-pro'] tracking-wide">build custom 3D gradient art in real time.</CardDescription>
            </CardHeader>

            <CardContent>
                <RadioGroup defaultValue={preset} className="flex gap-6 items-center" onValueChange={(value) => setPreset(value)}>
                    <div className="flex flex-col items-center gap-2">
                        <Label htmlFor="preset-1">valley</Label>
                        <RadioGroupItem value="valley" id="preset-1" className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Label htmlFor="preset-2">liquid</Label>
                        <RadioGroupItem value="liquid" id="preset-3" className="cursor-pointer" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Label htmlFor="preset-3">gloss</Label>
                        <RadioGroupItem value="gloss" id="preset-3" className="cursor-pointer" />
                    </div>
                </RadioGroup>
            </CardContent>

            <CardContent className="flex flex-col gap-3">
                <div className="flex flex-col">
                    <p className="font-['helvetica-neue-lt-pro'] text-left text-sm text-primary mb-2 tracking-wide">amplitude</p>
                    <Slider
                        value={[amplitude]}
                        onValueChange={(val) => setAmplitude(val[0])}
                        step={1}
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-['helvetica-neue-lt-pro'] text-left text-sm text-primary mb-2 tracking-wide">animation speed</p>
                    <Slider
                        value={[animationSpeed]}
                        onValueChange={(val) => setAnimationSpeed(val[0])}
                        min={0}
                        max={1}
                        step={0.05}
                        className="cursor-pointer"
                    />
                </div>

                <div className="flex flex-col">
                    <p className="font-['helvetica-neue-lt-pro'] text-left text-sm text-primary mb-2 tracking-wide">grain</p>
                    <Slider
                        value={[grain]}
                        onValueChange={(val) => setGrain(val[0])}
                        step={1}
                        className="cursor-pointer"
                    />
                </div>
            </CardContent>

            <CardContent>
                <p className="font-['helvetica-neue-lt-pro'] text-sm text-left text-primary mb-2 tracking-wide">color select</p>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="rounded-md cursor-pointer">
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
                        <DropdownMenuTrigger className="rounded-md cursor-pointer">
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
                        <DropdownMenuTrigger className="rounded-md cursor-pointer">
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
                        <DropdownMenuTrigger className="rounded-md cursor-pointer">
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
                        <DropdownMenuTrigger className="rounded-md cursor-pointer">
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
            </CardContent>

            <CardFooter>
                <Button className="mt-2 w-full cursor-pointer"> generate code block</Button>
            </CardFooter>
        </Card>

    )
}

export default ControlPanel