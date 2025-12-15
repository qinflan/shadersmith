import CodeSnippet from "./CodeSnippet"
import { Button } from "./ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CgNpm } from "react-icons/cg";
import { ImGithub } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

const Instructions = () => {
  return (
    <div className="flex mt-40 pt-30 pb-20 items-stretch gap-20" id="code-guide">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-left w-full font-['articulat-cf'] tracking-tight text-foreground select-none">installation / usage</h1>
        <p className="font-[Inter] text-xl text-left text-wrap tracking-tighter text-foreground select-none max-w-[600px]">
          This npm package provides modular animated shader gradient components for React applications.
        </p>
        <div className="flex gap-2 flex-row">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() =>
              window.open('https://www.npmjs.com/package/shadersmith-r3f', '_blank', 'noopener,noreferrer')
            }
          >
            <CgNpm />
            npm
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() =>
              window.open('https://github.com/qinflan/shadersmith-r3f', '_blank', 'noopener,noreferrer')
            }
          >
            <ImGithub />
            github
          </Button>
        </div>

        <div className="flex">
          <Table className="rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] p-4">Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead className="text-left">Description</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="rounded-2xl">

              <TableRow className="rounded-2xl">
                <TableCell className="text-left font-medium p-4">preset</TableCell>
                <TableCell className="text-left">valley, liquid, gloss</TableCell>
                <TableCell className="text-left">valley</TableCell>
                <TableCell className="text-left">Shader preset</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-left font-medium p-4">amplitude</TableCell>
                <TableCell className="text-left">number (0-100)</TableCell>
                <TableCell className="text-left">20</TableCell>
                <TableCell className="text-left">Intensity of the gradient</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-left font-medium p-4">animationSpeed</TableCell>
                <TableCell className="text-left">number (0-1)	</TableCell>
                <TableCell className="text-left">0.5</TableCell>
                <TableCell className="text-left">How fast the gradient animates</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-left font-medium p-4">colors</TableCell>
                <TableCell className="text-left">RGBA[5]</TableCell>
                <TableCell className="text-left">Default palette</TableCell>
                <TableCell className="text-left">Array of 5 RGBA colors.</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-left font-medium p-4">grain</TableCell>
                <TableCell className="text-left">number (0-100)</TableCell>
                <TableCell className="text-left">25</TableCell>
                <TableCell className="text-left">Grain overlay for softer look</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
        
        <div className="mt-20 flex items-center gap-3">
        <p className="font-[Inter] text-lg text-left text-wrap tracking-tighter text-foreground select-none max-w-[600px]">
          Copy and paste <span className="underline font-bold">your custom gradient art</span> from the snippet to the right
        </p>
        <FaArrowRight />
        </div>
      </div>
      <CodeSnippet />
    </div>
  )
}

export default Instructions