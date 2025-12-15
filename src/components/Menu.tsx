import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { HiMenu } from "react-icons/hi";


const Menu = () => {
  return (
    <div>
    <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="cursor-pointer">
            <HiMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel className="cursor-default">Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem  
              className="cursor-pointer" 
              onClick={() =>
                window.open('https://www.npmjs.com/package/shadersmith-r3f', '_blank', 'noopener,noreferrer')
              }
            >
              Documentation
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer" 
              onClick={() =>
                window.open('https://github.com/qinflan/shadersmith-r3f', '_blank', 'noopener,noreferrer')
              }
            >
              GitHub
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer" 
              onClick={() =>
                window.open('https://github.com/qinflan', '_blank', 'noopener,noreferrer')
              }
            >
              Author
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</div>
  )
}

export default Menu