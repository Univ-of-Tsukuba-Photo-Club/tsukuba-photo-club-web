import React, { useEffect, useState, useRef } from "react"
import { css } from "@emotion/core"

type Props = {
  imageUrls: string[]
}

const Slideshow: React.FC<Props> = (props) => {
  const { imageUrls, linkUrl } = props

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
    <a          
      href={linkUrl}
      css={css({
        width: "100%",
        height: "100%",
        position: "absolute",
        pointerEvents: linkUrl !== "" && urlIdx === 0 ? "" : "none",
      })}
    >
      {imageUrls.map((url, idx) => (
        <img
          key={url}
          css={css({
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            opacity: idx === urlIdx ? "1" : "0",
            transition: "opacity 1s ease",
          })}
          src={url}
        />
      ))}
    </a>
  )
}

export default Slideshow
