import { ModeToggle } from "./ThemeToggle"


const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center fixed top-0 text-[8px] border-b-1 bg-background z-50">
      <div className="flex w-full items-center justify-center p-4 ml-3 mr-3">
        <h1 className="relative text-left w-full font-['articulat-cf'] font-bold tracking-tight text-foreground select-none">shadersmith</h1>
          <ModeToggle/>
      </div>
    </div>
  )
}

export default Navbar