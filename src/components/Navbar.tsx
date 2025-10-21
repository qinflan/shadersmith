import { ModeToggle } from "./ThemeToggle"


const Navbar = () => {
  return (
    <div className="w-full ml-4 mt-4 fixed top-0 p-2 flex text-xs h-[100px] items-center gap-6">
        <h1 className="font-['articulat-cf'] font-bold tracking-tight text-foreground">shadersmith</h1>
        <div className="fixed right-[4vw]">
          <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar