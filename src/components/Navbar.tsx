import { ModeToggle } from "./ThemeToggle"


const Navbar = () => {
  return (
    <div className="w-full ml-2 mt-6 fixed top-0 p-2 flex text-sm h-[100px] items-center gap-6">
        <h1 className="font-['articulat-cf'] font-bold tracking-tight text-foreground">shadersmith</h1>
        <ModeToggle/>
    </div>
  )
}

export default Navbar