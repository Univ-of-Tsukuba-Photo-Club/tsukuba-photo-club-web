
import React, { useEffect, useState, useRef } from "react"
import { css } from "@emotion/core"

type Props = {
  imageUrls: string[]
}

const Slideshow: React.FC<Props> = (props) => {
  const { imageUrls } = props

  const [urlIdx, setUrlIdx] = useState(0)

  const ref = useRef({ imageUrls })
  useEffect(() => {
    const timer = setTimeout(() => {
      const isLast = ref.current.imageUrls.length - 1
      setUrlIdx(urlIdx !== isLast ? urlIdx + 1 : 0)
    }, 6000)
    return () => clearTimeout(timer)
  }, [urlIdx])

  return (
    <>
      
if (typeof window !== "undefined") {
  if (window.innerWidth < window.innerHeight) {
  
      {imageUrls.map((url, idx) => (
        <img
          key={url}
          css={css({
            width: "100vw",
            height: "100vh",
            objectFit: oF,
            position: "absolute",
            opacity: idx === urlIdx ? "1" : "0",
            transition: "opacity 1s ease",
          })}
          src={url}
        />
      ))}

  }else{
  
      {imageUrls.map((url, idx) => (
        <img
          key={url}
          css={css({
            width: "100vw",
            height: "100vh",
            objectFit: oF,
            position: "absolute",
            opacity: idx === urlIdx ? "1" : "0",
            transition: "opacity 1s ease",
          })}
          src={url}
        />
      ))}
    
  }
}
      
    </>
  )
}

export default Slideshow
