import React from 'react'

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
        </a>, and give a star!
      </h2>
    </div>
  )
}

export default Footer