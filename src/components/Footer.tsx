import star from "@/assets/star.svg"

const Footer = () => {
  return (
    <div className="flex h-[80px] bg-background w-full items-center justify-center border border-border">
      <h2 className="font-[Inter] text-lg text-muted-foreground font-regular tracking-tighter select-none">
        check out the <a
          href="https://github.com/qinflan/shadersmith-r3f"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          repository
        </a>, give it a star
      </h2>
      <img width={40} src={star} />
    </div>
  )
}

export default Footer